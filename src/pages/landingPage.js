import React from 'react';
import {
    useRouteMatch,
    Route,
    Switch,
    Link,
} from "react-router-dom";


import postdata from '../components/postdata';
import "./landingPage.css";
import singlePage from './singlePage';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardDeck from 'react-bootstrap/CardDeck';
import Container from 'react-bootstrap/Container';


const landingPage = () => {
    let match = useRouteMatch();
    const posts = postdata;


const expList = posts.map((post) => {
    return (
        <div key={post.id} >
            <Card bg="white" text="dark" className="mt-5" border="secondary" style={{ width: '10rem'}} >
            <Card.Img variant="top" src={post.imageUrl} alt={post.title} />
        <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Subtitle>{post.author}</Card.Subtitle>
        <Card.Text>{post.location}</Card.Text>   
        <Card.Text>{post.date}</Card.Text>
        <Card.Text>{post.shortDesc}</Card.Text>
        <Button variant="dark" block>
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
                <singlePage/>
            </Route>
            <Route path={match.path}>
                <Container>
            <CardDeck>{expList}</CardDeck> 
                 </Container>
            </Route>
        </Switch>
    </div>
);
};

export default landingPage;