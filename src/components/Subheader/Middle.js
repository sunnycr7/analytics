import React from "react";
import ActionButton from "./ActionButton";

class Middle extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="subComments">
          <p>Comments (0)</p>
        </div>
        <ActionButton iconClass="angle double left icon" actionName="Add" />
        <ActionButton iconClass="heart outline icon" actionName="Favorite" />
        <ActionButton iconClass="share alternate icon" actionName="Share" />
        <ActionButton iconClass="rss icon" actionName="Subscriptions" />
      </React.Fragment>
    );
  }
}

export default Middle;
