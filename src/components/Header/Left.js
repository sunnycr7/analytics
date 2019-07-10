import "./Header.css";
import React from "react";

import logo from "../../assets/img/logo_fin.png";

class Left extends React.Component {
  render() {
    return (
      <React.Fragment>
        <img src={logo} className="logo lefty" alt="logo" />
        <h1 className="leftyTitle">Fin's Dog Food Co.</h1>
      </React.Fragment>
    );
  }
}

export default Left;
