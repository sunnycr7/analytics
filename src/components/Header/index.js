import "./Header.css";
import React from "react";
import UserAvatar from "./UserAvatar";
import Left from "./Left";
import Middle from "./Middle";
import Right from "./Right";

const Header = props => {
  return (
    <div className="header">
      <div className="left">
        <Left />
      </div>
      <div className="middle">
        <Middle />
      </div>
      <div className="right">
        <Right />
      </div>
      <div className="avatar">
        <UserAvatar imageLink={props.imageLink} />
      </div>
    </div>
  );
};

export default Header;
