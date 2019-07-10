import React from "react";

class Right extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="ui simple dropdown item">
          <button className="subDown">
            <i className="angle down icon jumbo downArrow" />
          </button>
          <div className="menu logoutMenu">
            <div className="item" onClick={this.props.onClickLogout}>
              Logout
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Right;
