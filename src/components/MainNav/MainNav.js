import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import "./MainNav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const MainNav = () => {
  return (
    <div className="main-nav">
      <NavBar />
      <h1>
        <Link className="logo" to="/">
          eXp
        </Link>
      </h1>
      <span className="search-btn">
        <FontAwesomeIcon icon={faSearch} />
      </span>
    </div>
  );
};

export default MainNav;
