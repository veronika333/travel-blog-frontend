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

    const[postSent, setPostSent] = useState({
        disabled: false,
        experienceSent: null, 
    });
    

    const changeValueHandler = (p) => {
        setNewPost({
            ...newPost,
            [p.target.name]:p.target.value,
        });
    };

    const addPostHandler = (p) => {
        p.preventDefault();

        setNewPost({
            disabled: true
        });

        // send new Experience post from browser and database.
        // Please note: This code does send data, but the disabled and experienceSent
        // do NOT work at this moment, because they are not part of newPost.
        axios.post("http://localhost:8000/experience", newPost).then(response =>{
            if(response.data.success){
                setNewPost({
                    disabled: false,
                    experienceSent: true
                });
                console.log(response.data);
            } else {
                setNewPost({
                    disabled: false,
                    experienceSent: false
                });
            }
        })
            .catch(err =>{
                console.log(err);  
            
            setNewPost({
                disabled: false,
                experienceSent: false
            });
        })
    }

    return (
        <>
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

        {useState.experienceSent === true && <p className="d-inline exp-post-success">Experience Posted</p>}
        {useState.experienceSent === false && <p className="d-inline exp-post-err">Experience not Sent.</p>}
        </Form>
        </>
    );
};

export default NewPost;