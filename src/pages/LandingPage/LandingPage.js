import React from 'react';
import postdata from '../../components/postdata';
import SinglePage from '../SinglePage/SinglePage'
import {
    useRouteMatch,
    Route,
    Switch,
    Link,
} from "react-router-dom";

import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardDeck from 'react-bootstrap/CardDeck';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const LandingPage = () => {
    let match = useRouteMatch();
    const posts = postdata;

    const expList = posts.map((post) => {
        return (
            <div key={post.id} >
                
                <Card bg="dark" text="warning" className="mt-3"  border="secondary" style={{ width: '20rem' }} >
                    <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Img variant="top" className="mb-3" src={post.imageUrl} alt={post.title} />
                        <Card.Subtitle>{post.author}</Card.Subtitle>
                        <Card.Text>{post.location}{post.date}</Card.Text>
                        <Card.Text>{post.shortDesc}</Card.Text>
                        <Button variant="warning" size="sm">
                        <Link to={`${match.url}/${post.title}`}> Read experience 
                            </Link>
                        </Button>
                    </Card.Body>
                </Card>
               
            </div>
        );
    });


    return (
        <div>
             <Switch>
            <Route path="/:postAuthor/:postId">
                <SinglePage/>
                </Route>
            <Route path={match.path}>
             <Jumbotron className="bg-transparent jumbotron-fluid p-0">
             <Container fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={2}>
                <CardDeck>{expList}</CardDeck>
                </Col>
                </Row>
                </Container>
            </Jumbotron>
            </Route>
        </Switch>
        </div>
    );
};

export default LandingPage;