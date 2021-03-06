import React, { useState, useEffect } from "react";
import SinglePage from "../SinglePage/SinglePage";
import { useRouteMatch, Link } from "react-router-dom";
import Comments from "./Comments";
import axios from "axios";
import "./landingPage.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

const LandingPage = () => {
  const [exp, setExp] = useState([]);
  const [comments, setComments] = useState(0);
  let match = useRouteMatch();
  let dateFormat = undefined;

  useEffect(() => {
    axios
      .get("https://travel-experience-blog.herokuapp.com/experience")
      .then((response) => {
        const sorted = response.data.sort((a, b) => {
          return new Date(b.date) - new Date(a.date);
        });
        setExp(sorted);

        console.log(response.data);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        "https://travel-experience-blog.herokuapp.com/experience/:id/comment"
      )
      .then((response) => {
        setComments(response.data.length);
        console.log(response.data);
        console.log(response.data.length);
      });
  }, []);

  /* const commentHandler = () => setComments(comments + 1) */

  const expList = exp.map((post) => {
    const link = "/" + post._id;
    dateFormat = new Date(post.date).toDateString();
    console.log(dateFormat);

    return (
      <div className="container">
        <div key={post._id} className="exp-container">
          <Card>
            <Card.Body>
              <Card.Title className="card-title">{post.title}</Card.Title>
              <Card.Img
                variant="top"
                className="mb-3"
                src={post.imageUrl}
                alt={post.title}
              />
              <Card.Subtitle>{post.author}</Card.Subtitle>
              <br />
              <Card.Text>
                {post.location} <br />
                {dateFormat}
              </Card.Text>
              <Card.Text className="short-desc"> {post.shortDesc}</Card.Text>
              <button className="read-more-btn">
                {/* Links need to be dynamic in order for React rendering to be competent */}
                <Link to={`/${post._id}`} className="btn-link">
                  {" "}
                  Read experience{" "}
                  <FontAwesomeIcon
                    className="arrow-right-icon"
                    icon={faAngleDoubleRight}
                  ></FontAwesomeIcon>{" "}
                </Link>
              </button>
              <Comments comments={comments}></Comments>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  });

  return (
    <div>
      <Jumbotron className="bg-transparent jumbotron-fluid p-0 justify-content-center py-5">
        <Container fluid={true}>
          <h1 className="blog-title">Experience Blog</h1>

          {expList}
        </Container>
      </Jumbotron>
    </div>
  );
};

export default LandingPage;
