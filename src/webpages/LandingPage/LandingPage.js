import React, { useState, useEffect } from "react";
import SinglePage from "../SinglePage/SinglePage";
import { useRouteMatch, Link } from "react-router-dom";
import axios from "axios";
import './landingPage.css'
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

const LandingPage = () => {
  const [exp, setExp] = useState([]);
  let match = useRouteMatch();

  useEffect(() => {

    axios.get("http://localhost:5000/experience").then((response) => {
      const sorted = response.data.sort((a, b) => {
        return new Date(b.date) - new Date(a.date)
      })
      setExp(sorted);

      console.log(response.data);
    });
  }, []);

  const expList = exp.map((post) => {
    const link = "/" + post._id;
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
                {post.date}
              </Card.Text>
              <Card.Text className="short-desc"> {post.shortDesc}</Card.Text>
              <button className="read-more-btn">
                {/* Links need to be dynamic in order for React rendering to be competent */}
                <Link to={`/${post._id}`} className="btn-link"> Read experience <FontAwesomeIcon className="arrow-right-icon" icon={faAngleDoubleRight}></FontAwesomeIcon> </Link>
              </button>
            </Card.Body>
          </Card>
        </div>
      </div >
    );
  });

  return (
    <div >
      <Jumbotron className="bg-transparent jumbotron-fluid p-0 justify-content-center py-5">
        <Container fluid={true} >
          <h1 className="blog-title">Experience Blog</h1>

          {expList}



        </Container>
      </Jumbotron>
    </div>
  );
};

export default LandingPage;
