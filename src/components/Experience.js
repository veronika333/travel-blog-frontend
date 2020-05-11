import React from 'react';
import { Container, Col, Row, Button } from "react-bootstrap";
import { useParams, Link } from 'react-router-dom';

export default () => {
    const { loadedExp, deleteHandler } = useParams();

    return (
        <Container>
            <Col>
                <Row>
                    <h1>{loadedExp.title}</h1>
                </Row>
                <Row>
                    <h3>{loadedExp.author}</h3>
                </Row>
                <p>{loadedExp.shortDes}</p>
                <p>{loadedExp.location}</p>
                <p>{loadedExp.date}</p>
                <img src={loadedExp.imageUrl} alt={loadedExp.title} width="200" />
                <img src={loadedExp.imageUrl} alt={loadedExp.title} width="200" />
                <img src={loadedExp.imageUrl} alt={loadedExp.title} width="200" />
            </Col>
            <p>{loadedExp.story}</p>
            <div className="single-page-btn">
                <Button variant="warning" size="smd">
                    <Link to="/landing-page">Back to experiences.</Link>
                </Button>
            </div>
            <div className="single-page-btn">
                <Button
                    variant="warning"
                    size="smd"
                    onClick={() => {
                        deleteHandler(loadedExp.id);
                    }}
                >
                    Delete experience
                </Button>
            </div>
        </Container>
    );
}