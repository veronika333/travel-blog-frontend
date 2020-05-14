import React, { useState, useEffect, Component } from "react";
import "./SinglePage.css";
import DeletePopup from "../../components/DeletePopup/DeletePopup";
import axios from "axios";

import { useParams, Link } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

const SinglePage = () => {

  const [loadedExp, setLoadedExp] = useState();
  const [failedDelete, setFailedDelete] = useState();
  const [modal, setModal] = useState(false);
  let postId = window.location.pathname;


  //delete single post from the browser and database
  const deleteHandler = (_id) => {
    axios.delete("http://localhost:5000/experience/" + _id).then((response) => {
      console.log(response);
      if (response.status === 204) {
        setFailedDelete(true);
      } else {
        setLoadedExp("");
      }
    });
  };

  //redirect to landing page and update the page by refreshing
  const forceReload = () => {
    window.location.href = "http://localhost:3000/";
  };

  useEffect(() => {
    if (!loadedExp) {
      axios
        .get("http://localhost:5000/experience/" + postId)
        .then((response) => {
          setLoadedExp(response.data);
        });
    }
  });

  const modalHandler = () => {
    setModal(!modal);
  }

  let exp = undefined;

  if (postId) {
    exp = <h1>Loading</h1>;
  }

  if (loadedExp && failedDelete) {
    exp = (
      <div>
        <Alert variant="warning">
          <Alert.Heading>Experience not Deleted</Alert.Heading>
          <p>Pleases try again later</p>
        </Alert>
      </div>
    );
  } else if (loadedExp) {
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
        <div className="single-page-btn">
          <Button variant="warning" size="smd">
            <Link to="/">Back to experiences.</Link>
          </Button>
        </div>
        <div className="single-page-btn">
          <Button
            variant="warning"
            size="smd"
            onClick={modalHandler}
          >
            Delete experience
          </Button>
          {modal&&<DeletePopup 
            deleteHandler={
              () => {
               deleteHandler(loadedExp._id);
              }
            }
            modalHandler={modalHandler}
          />}
        </div>
      </Container>
    );
  } else {
    exp = (
      <div>
        <Alert variant="success">
          <Alert.Heading>Successfully deleted experience</Alert.Heading>
        </Alert>

        <Button onClick={() => forceReload()} variant="warning" size="smd">
          Back to experiences
        </Button>
      </div>
    );
  }
  return exp;
};
export default SinglePage;
