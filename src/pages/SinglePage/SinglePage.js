import React from 'react';
import postsdata from '../../components/postsdata';
import './SinglePage.css';

import { useParams, Link } from "react-router-dom";


import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'


const SinglePage = () => {

    let { postId } = useParams();
    let post = postsdata.find((p) => p.title === postId);

    return (
        <Container>
            <Col>
                <Row>
                    <h1>{post.title}</h1>
                </Row >
                <Row>
                    <h3>{post.author}</h3>
                </Row>
                <p>{post.shortDes}</p>
                <p>{post.location}</p>
                <p>{post.date}</p>
                <img src={post.imageUrl} alt={post.title} width="200" />
                <img src={post.imageUrl} alt={post.title} width="200" />
                <img src={post.imageUrl} alt={post.title} width="200" />
            </Col>
            <p>{post.story}</p>
            <div>
                <Button variant="warning" size="smd">
                    <Link to="/landing-page"> Back to experiences.
                            </Link>
                </Button>
            </div>
        </Container>
    );
}
export default SinglePage;