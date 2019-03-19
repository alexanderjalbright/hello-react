import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    const logoUrl =
      "https://techcrunch.com/wp-content/uploads/2018/07/logo-2.png?w=300";
    return (
      <header>
        <img src={logoUrl} alt="logo" style={{ width: "40px" }} />
        <h1>Header</h1>
      </header>
    );
  }
}

export default Header;
