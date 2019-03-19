import React, { Component } from "react";

export default class ValueDisplayer extends Component {
  render() {
    let { currentValue } = this.props;
    return <span>{currentValue}</span>;
  }
}
