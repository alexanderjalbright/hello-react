import React, { Component } from "react";

export default class Decrementor extends Component {
  render() {
    const { decrement } = this.props;
    return <button onClick={decrement}>--</button>;
  }
}
