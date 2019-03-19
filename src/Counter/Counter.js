import React, { Component } from "react";
import Decrementor from "./Decrementor";
import ValueDisplayer from "./ValueDisplayer";
import Incrementor from "./Incrementor";
import "./Counter.css";

export default class Counter extends Component {
  constructor() {
    super();
    this.state = {
      currentValue: 0
    };
  }

  increment = () => {
    const newValue = this.state.currentValue + 1;
    this.setState({ currentValue: newValue });
  };

  decrement = () => {
    const newValue = this.state.currentValue - 1;
    this.setState({ currentValue: newValue });
  };

  render() {
    return (
      <div>
        <Decrementor decrement={this.decrement} />
        <ValueDisplayer currentValue={this.state.currentValue} />
        <Incrementor increment={this.increment} />
      </div>
    );
  }
}
