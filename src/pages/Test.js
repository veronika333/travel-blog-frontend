import React from 'react';
import postdata from '../components/postdata';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardDeck from 'react-bootstrap/CardDeck';
import Container from 'react-bootstrap/Container';


const Test = () => {
    const posts = postdata;

    const expList = posts.map((post) => {
        return (
            <div key={post.id} >
                <Card bg="white" text="dark" className="mt-5" border="secondary" style={{ width: '13rem' }} >
                    <Card.Img variant="top" src={post.imageUrl} alt={post.title} />
                    <Card.Body>
                        <Card.Title>{post.title}</Card.Title>
                        <Card.Subtitle>{post.author}</Card.Subtitle>
                        <Card.Text>{post.location}</Card.Text>
                        <Card.Text>{post.date}</Card.Text>
                        <Card.Text>{post.shortDesc}</Card.Text>
                        <Button variant="primary">
                            Read experience 
                        </Button>
                    </Card.Body>
                </Card>
            </div>
        );
    });


    return (
        <div>
            <Container>
                <CardDeck>{expList}</CardDeck>
            </Container>
        </div>
    );
};

export default Test;