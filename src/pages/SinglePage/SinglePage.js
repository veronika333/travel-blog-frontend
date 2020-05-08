import React, { useEffect, useState } from 'react';
import './SinglePage.css';
import axios from 'axios'

import { useParams, Link } from "react-router-dom";

import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'


const SinglePage = () => {
    const [loadedPost, setLoadedpost] = useState();

    let { postId } = useParams();
    console.log(postId)
    useEffect(() => {
        if (!loadedPost) {
            axios.get('http://localhost:8000/experience/' + postId).then((response) => {
                console.log(response.data);
                setLoadedpost(response.data);

            });
        }
    });

    let postData = undefined;
    if (postId) {
        postData = <h1>Loading post</h1>
    }
    if (loadedPost) {
        postData = (
            <div className="fullPost">
                <Container>
                    <Col>
                        <Row>
                            <h1>{loadedPost.title}</h1>
                        </Row >
                        <Row>
                            <h3>{loadedPost.author}</h3>
                        </Row>
                        <p>{loadedPost.shortDesc}</p>
                        <p>{loadedPost.location}</p>
                        <p>{loadedPost.date}</p>
                        <img src={loadedPost.imageUrl} alt={loadedPost.title} width="200" />
                        <img src={loadedPost.imageUrl} alt={loadedPost.title} width="200" />
                        <img src={loadedPost.imageUrl} alt={loadedPost.title} width="200" />
                    </Col>
                    <p>{loadedPost.story}</p>
                    <div>
                        <Button variant="warning" size="smd">
                            <Link to="/experience"> Back to experiences.
                               </Link>
                        </Button>
                    </div>
                </Container>
            </div>

        );
    }


    return postData;


}
export default SinglePage;