import React, { Component } from "react";
import AsyncProgramming from "./async";
import Counter from "./counter";
import LearnMemo from "./test2";
import LearnCallbackParent from "./test3";

class TestPage extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }
  handleIncrement() {
    this.setState({ counter: this.state.counter + 1 });
  }
  componentDidMount() {
    console.log("when component render first time ");
  }
  render() {
    return (
      <div>
        <AsyncProgramming />
        {/* <LearnCallbackParent /> */}
        {/* <LearnMemo /> */}
        {/* <Counter counterValue={this.state.counter} /> */}
        {/* <button onClick={this.handleIncrement.bind(this)}>Increment</button> */}
      </div>
    );
  }
}

export default TestPage;
