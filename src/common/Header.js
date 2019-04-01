import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";

class Header extends Component {
  render() {
    return (
      <AppBar position="static" color="primary">
        <div className="header">
          <p className="title">Lista de Compras</p>
        </div>
      </AppBar>
    );
  }
}

export default Header;
