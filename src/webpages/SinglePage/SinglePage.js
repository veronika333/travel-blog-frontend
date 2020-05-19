import React, { useState, useEffect, Component } from "react";
import "./SinglePage.css";
import NewComment from "../../components/NewComment/NewComment";
import axios from "axios";
import CommentBox from "../../components/CommentBox/CommentBox";

import { Link } from "react-router-dom";
import DeletePopup from "../../components/DeletePopup/DeletePopup";
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const SinglePage = () => {

  const [loadedExp, setLoadedExp] = useState();

  //state added to conditional rendering to show failed delete

  const [failedDelete, setFailedDelete] = useState();

  const [modal, setModal] = useState(false);
 

  //state added to conditional rendering to show successful delete
  const [succesfullyDeleted, setSuccesfullyDeleted] = useState();
  const [editPost, setEditPost] = useState();

  //state showing confirmation post saved or unsaved
  const [postSaved, setPostSaved] = useState({
    disableAlert: true,
    expSaved: null,
  });

  let postId = window.location.pathname;

  //allow edit event to happen
  const editPostHandler = (e) => {
    e.preventDefault();
    setEditPost(true);
  };

  const editValueHandler = (e) => {
    setLoadedExp({
      ...loadedExp,
      [e.target.name]: e.target.value,
    });
  };

  //save edited post event handler
  const savePostHandler = (e) => {
    e.preventDefault();
    let config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios
      .patch("http://localhost:5000/experience/" + postId, loadedExp, config)
      .then((response) => {
        setPostSaved({
          disableAlert: false,
          expSaved: response.data.sucess ? false : true,
        });
      })
      .catch((err) => {
        console.log(err);
        setPostSaved({
          disableAlert: false,
          expSaved: false,
        });
      });
  };

  //delete single post from the browser and database
  const deleteHandler = (_id) => {
    axios.delete("http://localhost:5000/experience/" + _id).then((response) => {
      console.log(response);
      if (response.status === 204) {
        setFailedDelete(true);
      } else {
        setLoadedExp("");
        setSuccesfullyDeleted(true);
      }
    });
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
  } //show loaded exp as form
  else if (loadedExp && editPost) {
    exp = (
      <Container>
        <Form style={{ paddingLeft: "2rem", paddingTop: "2rem" }}>
          <Form.Group controlId="formBasicTitle">
            <Form.Label style={{ fontSize: "1.5rem" }}>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              defaultValue={loadedExp.title}
              onChange={(e) => editValueHandler(e)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicAuthor">
            <Form.Label style={{ fontSize: "1.5rem" }}>Author</Form.Label>
            <Form.Control
              type="text"
              name="author"
              defaultValue={loadedExp.author}
              onChange={(e) => editValueHandler(e)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicDesc">
            <Form.Label style={{ fontSize: "1.5rem" }}>
              Short Description
            </Form.Label>
            <Form.Control
              type="text"
              defaultValue={loadedExp.shortDesc}
              onChange={(e) => editValueHandler(e)}
              name="shortDesc"
            />
          </Form.Group>
          <Form.Group controlId="formBasicLocation">
            <Form.Label style={{ fontSize: "1.5rem" }}>Location</Form.Label>
            <Form.Control
              type="text"
              defaultValue={loadedExp.location}
              onChange={(e) => editValueHandler(e)}
              name="location"
            />
          </Form.Group>
          <Form.Group controlId="formBasicDate">
            <Form.Label style={{ fontSize: "1.5rem" }}>Date</Form.Label>
            <Form.Control
              type="text"
              defaultValue={loadedExp.date}
              onChange={(e) => editValueHandler(e)}
              name="date"
            />
          </Form.Group>

          <Form.Group controlId="formBasicImage">
            <Form.Label style={{ fontSize: "1.5rem" }}>Image Url</Form.Label>
            <Form.Control
              type="text"
              defaultValue={loadedExp.imageUrl}
              onChange={(e) => editValueHandler(e)}
              name="imageUrl"
            />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlStory">
            <Form.Label style={{ fontSize: "1.5rem" }}>Story</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              name="story"
              defaultValue={loadedExp.story}
              onChange={(e) => editValueHandler(e)}
            />
          </Form.Group>

          <Button onClick={savePostHandler} variant="primary" type="submit">
            Save
          </Button>
          {postSaved.disableAlert ? (
            ""
          ) : (
            <Alert variant={postSaved.expSaved === true ? "success" : "danger"}>
              Experience {postSaved.expSaved === true ? "Saved" : "not Saved"}
            </Alert>
          )}
        </Form>
        <div className="single-page-btn">
          <Button variant="warning" size="smd">
            <Link to="/">Back to experiences.</Link>
          </Button>
        </div>
      </Container>
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
          <p>{loadedExp.shortDesc}</p>
          <p>{loadedExp.location}</p>
          <p>{loadedExp.date}</p>
          <img src={loadedExp.imageUrl} alt={loadedExp.title} width="200" />
          <img src={loadedExp.imageUrl} alt={loadedExp.title} width="200" />
          <img src={loadedExp.imageUrl} alt={loadedExp.title} width="200" />
        </Col>
        <p>{loadedExp.story}</p>
        <div>
          <CommentBox />
        </div>
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
        <div className="single-page-btn">
          <Button variant="warning" size="smd" onClick={editPostHandler}>
            Edit experience
          </Button>
        </div>
        <div>
        <NewComment />
        </div>
      </Container>
    );
  } else if (succesfullyDeleted) {
    exp = (
      <div>
        <Alert variant="success">
          <Alert.Heading>Successfully deleted experience</Alert.Heading>
        </Alert>

        <div className="single-page-btn">
          <Button variant="warning" size="smd">
            <Link to="/">Back to experiences.</Link>
          </Button>
        </div>
      </div>
    );
  }
  return exp;
};
export default SinglePage;
