import React, { Component } from "react";
import "./Counter.css";

class Counter extends Component {
  render() {
    // const { copyrightHolder, copyrightYear } = this.props;
    return (
      <div>
        <button>--</button>
        <span>0</span>
        <button>++</button>
      </div>
    );
  }
}

export default Counter;
