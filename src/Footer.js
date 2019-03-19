import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    const { copyrightHolder, copyrightYear } = this.props;
    return (
      <footer>
        <p>
          &copy; {copyrightYear} {copyrightHolder}
        </p>
      </footer>
    );
  }
}

export default Footer;
