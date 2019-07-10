import "./Header.css";
import React from "react";

const UserAvatar = props => {
  return (
    <div>
      <img className="user-image" src={props.imageLink} alt="user avatar" />
    </div>
  );
};

export default UserAvatar;
