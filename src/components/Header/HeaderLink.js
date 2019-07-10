import "./Header.css";
import React from "react";
import { Link } from "react-router-dom";

const HeaderLink = props => {
  return (
    <div className="header-link">
      <Link to="/" className="middleLink">
        {props.name}
      </Link>
    </div>
  );
};

export default HeaderLink;
