import React, { useState, useEffect } from "react";
import SinglePage from "../SinglePage/SinglePage";
import { useRouteMatch, Route, Switch, Link } from "react-router-dom";
import axios from "axios";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardDeck from "react-bootstrap/CardDeck";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const LandingPage = () => {
  const [exp, setExp] = useState([]);
  let match = useRouteMatch();

  useEffect(() => {
    axios.get("http://localhost:8000/experience").then((response) => {
    setExp(response.data);
      console.log(response.data);
    });
  }, []);

  const expList = exp.map((post) => {
    return (
      <div key={post.id}>
        <Card
          bg="dark"
          text="warning"
          className="mt-3"
          border="secondary"
          style={{ width: "20rem" }}
        >
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Img
              variant="top"
              className="mb-3"
              src={post.imageUrl}
              alt={post.title}
            />
            <Card.Subtitle>{post.author}</Card.Subtitle>
            <Card.Text>
              {post.location}
              {post.date}
            </Card.Text>
            <Card.Text>{post.shortDesc}</Card.Text>
            <Button variant="warning" size="sm">
               {/* Links need to be dynamic in order for React rendering to be competent */}
              <Link to={`/${post.id}`}> Read experience</Link>
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  });

  return (
    <div>
          <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container fluid={true}>
              <Row className="justify-content-center py-5">
                <Col md={2}>
                  <CardDeck>{expList}</CardDeck>
                </Col>
              </Row>
            </Container>
          </Jumbotron>
    </div>
  );
};

export default LandingPage;