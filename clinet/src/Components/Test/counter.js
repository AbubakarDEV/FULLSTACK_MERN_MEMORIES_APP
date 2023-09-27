import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevprops, prevstate) {
    if (prevprops.counterValue !== this.props.counterValue) {
      console.log("Component updated");
    }
  }

  render() {
    return <h1>{this.props.counterValue}</h1>;
  }
}

export default Counter;
