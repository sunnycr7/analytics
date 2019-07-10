import React from "react";
import { Route } from "react-router-dom";

import Overview from "./Overview/Overview";
import Header from "./Header";
import Subheader from "./Subheader";
import profile from "../assets/img/profile_fin.png";

import "./App.css";

class App extends React.Component {

  render() {
    return (
      <div>
        {/* display mock header components */}
        {/* <div>
          <Header imageLink={profile} />
          <Subheader />
        </div> */}

        {/* route all paths to overview page */}
        <Route path="/" exact component={Overview} />
        <Route path="/overview" exact component={Overview} />
      </div>
    );
  }
}

export default App;
