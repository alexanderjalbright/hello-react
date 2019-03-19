import React, { Component } from "react";

export default class Incrementor extends Component {
  render() {
    const { increment } = this.props;
    return <button onClick={increment}>++</button>;
  }
}
