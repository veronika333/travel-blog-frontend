import React, { useState, useEffect } from "react";
import "./SinglePage.css";
import axios from "axios";

import { useParams, Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

const SinglePage = () => {
  const [loadedExp, setLoadedExp] = useState();
  let { postId } = useParams();
  const deleteHandler = (id) => {
    console.log(id);
    axios.delete("http://localhost:8000/experience/" + id).then(() => {
      console.log(`Deleted post: ${id}`);
      setLoadedExp("");
    });
  };

  const forceReload = () => {
    window.location.href = "http://localhost:3000/landing-page";
  };

  useEffect(() => {
    if (!loadedExp) {
      axios
        .get("http://localhost:8000/experience/" + postId)
        .then((response) => {
          setLoadedExp(response.data);
        });
    }
  });

  let exp = undefined;

  if (postId) {
    exp = <h1>Loading</h1>;
  }

  if (loadedExp) {
    exp = (
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
        <div>
          <Button variant="warning" size="smd">
            <Link to="/landing-page">Back to experiences.</Link>
          </Button>
        </div>
        <div>
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
  } else {
    exp = (
      <div>
        <h1>Deleted post</h1>
        <Button onClick={() => forceReload()} variant="warning" size="smd">
          Back to experiences
        </Button>
      </div>
    );
  }
  return exp;
};
export default SinglePage;
