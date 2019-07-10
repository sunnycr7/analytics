import "./Subheader.css";
import React from "react";
import Left from "./Left";
import Middle from "./Middle";
import Right from "./Right";

class Subheader extends React.Component {
  onClickLogout = () => {
    console.log("Log out");
  };

  render() {
    return (
      <div className="subMain">
        <div className="subLeft">
          <Left />
        </div>
        <div className="subMiddle">
          <Middle />
        </div>
        <div className="subRight">
          <Right onClickLogout={this.onClickLogout} />
        </div>
      </div>
    );
  }
}

export default Subheader;
