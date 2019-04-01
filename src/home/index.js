import React, { Component } from "react";

import "./Home.css";
import NewList from "./NewList";
import List from "./List";

class Home extends Component {
  render() {
    return (
      <div className="page-container">
        <NewList />
        <List />
      </div>
    );
  }
}

export default Home;
