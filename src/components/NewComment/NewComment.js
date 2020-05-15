import React, { useState } from "react";
import './NewComment.css';
import axios from 'axios';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';


const NewComment = () => {
    const [newComment, setNewComment] = useState({
        author: '',
        content: '',
        imageUrl: '',
    });

    // These are to confirm the comment is send to database
    // User also gets a success/error alert message. 
    // Alert is disabled (true) because otherwise it pops up whenever user renders the page.
    const [commentSent, setcommentSent] = useState({
        disableAlert: true,
        commentConfirm: null,
    });


    const changeCValuehandler = (c) => {
        setNewComment({
            ...newComment,
            [c.target.name]: c.target.value,
        });
    };

    const addCommentHandler = (c) => {
        c.preventDefault();

        // sends new Experience post (NewComment) from browser and database.
        axios.post("http://localhost:5000/experience/:id/comment", NewComment)
            .then(response => {
                // Here the code gets the message to make the alert visible.
                setcommentSent({
                    disableAlert: false,
                    commentConfirm: response.data.success ? false : true
                });
            })
            .catch(err => {
                console.log(err);

                setcommentSent({
                    disableAlert: false,
                    commentConfirm: false
                });
            });
    }

    return (
        <Form className="NewComment" onSubmit={addCommentHandler}>
            <div>
                <h3>Write a comment</h3>
            </div>
            <Form.Group>
                <Form.Label htmlFor="author">Author</Form.Label>
                <Form.Control id="author" name="author" type="text" onChange={changeCValuehandler} />
            </Form.Group>
            <Form.Group>
                <Form.Label htmlFor="content">Write a Comment</Form.Label>
                <Form.Control id="content" name="content" as="textarea" rows="2" onChange={changeCValuehandler} />
            </Form.Group>
            <Form.Group>
                <Form.Label htmlFor="imageUrl">Include an image</Form.Label>
                <Form.Control id="imageUrl" name="imageUrl" type="text" onChange={changeCValuehandler} />
            </Form.Group>
            <Button className="d-inline-block" variant="warning" type="submit">
                Submit
        </Button>
            {
                commentSent.disableAlert ?
                    '' :
                    <Alert variant={commentSent.commentConfirm === true ? 'success' : 'danger'}>
                        Comment {commentSent.commentConfirm === true ? 'Shared' : 'not Shared, please check your network.'}
                    </Alert>
            }
        </Form>
    );
};

export default NewComment;