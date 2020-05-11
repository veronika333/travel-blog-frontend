import React, { useState } from "react";
import './NewPost.css';
import axios from 'axios';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';


const NewPost = () => {
    const [newPost, setNewPost] = useState({
        title: '',
        imageUrl: '',
        author: '',
        shortDesc: '',
        location: '',
        date: '',
        story: '',
    });

    // These are to confirm the Experience is send to database
    // User also gets a success/error alert message. 
    const [postSent, setPostSent] = useState({
        disableAlert: true,
        experienceSent: null, 
    });
    

    const changeValueHandler = (p) => {
        setNewPost({
            ...newPost,
            [p.target.name]: p.target.value,
        });
    };

    const addPostHandler = (p) => {
        p.preventDefault();


        axios.post("http://localhost:8000/experience", newPost)
        .then(response => {
                setPostSent({
                    disableAlert: false,
                    experienceSent: response.data.success ? true : false
                });
            }) 
            .catch(err =>{
                console.log(err);  
            
            setPostSent({
                disableAlert: false,
                experienceSent: false
            });
        });
    }

    return (
        <Form className="newPost" onSubmit={addPostHandler}>
        <Form.Group>
            <Form.Label htmlFor="title">Title</Form.Label>
            <Form.Control id="title" name="title" type="text" onChange={changeValueHandler} />
        </Form.Group>
        <Form.Group>
            <Form.Label htmlFor="imageUrl">Image</Form.Label>
            <Form.Control id="imageUrl" name="imageUrl" type="text" onChange={changeValueHandler} />
        </Form.Group>
           <Form.Group>
            <Form.Label htmlFor="author">Author</Form.Label>
            <Form.Control id="author" name="author" type="text" onChange={changeValueHandler} />
        </Form.Group>
        <Form.Group>
            <Form.Label htmlFor="shortDesc">Description</Form.Label>
            <Form.Control id="shortDesc" name="shortDesc" as="textarea"  rows="2" onChange={changeValueHandler} />
        </Form.Group>
        <Form.Group>
            <Form.Label htmlFor="location">Location</Form.Label>
            <Form.Control id="location" name="location" type="text" onChange={changeValueHandler} />
        </Form.Group>
        <Form.Group>
            <Form.Label htmlFor="date">Date</Form.Label>
            <Form.Control id="date" name="date" type="text" onChange={changeValueHandler} />
        </Form.Group>
        <Form.Group>
            <Form.Label htmlFor="story">Story</Form.Label>
            <Form.Control id="story" name="story" as="textarea"  rows="4" onChange={changeValueHandler} />
        </Form.Group>

        <Button className="d-inline-block" variant="warning" type="submit">
            Share Experience
        </Button>

        {
                postSent.disableAlert ?
                '' :
                <Alert variant={postSent.experienceSent === true ? 'success' : 'danger'}>
                    Experience {postSent.experienceSent === false ? 'Posted' : 'not Sent'}
                </Alert>
            }
    </Form>
    );
};

export default NewPost;