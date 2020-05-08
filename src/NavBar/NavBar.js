import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const openNav = () => {
    document.querySelector(".nav-bar").style.width = "250px";
  };
  const closeNav = () => {
    document.querySelector(".nav-bar").style.width = "0";
  };
  return (
    <div>
      <nav className="nav-bar">
        <span className="close-btn" onClick={closeNav}>
          <FontAwesomeIcon icon={faTimes} />
        </span>
        <ul>
          <li>
            <Link to="/" className="nav-link" onClick={closeNav}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link" onClick={closeNav}>
              About
            </Link>
          </li>
        </ul>
      </nav>
      <span className="open-btn" onClick={openNav}>
        <FontAwesomeIcon icon={faBars} />
      </span>
    </div>
  );
};

export default NavBar;
