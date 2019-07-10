import "./Subheader.css";
import React from "react";

const ActionButton = props => {
  return (
    <button className="subAction">
      <i className={props.iconClass} />
      {props.actionName}
    </button>
  );
};
export default ActionButton;
