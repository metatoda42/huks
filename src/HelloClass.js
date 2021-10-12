import React from "react";
import { Component } from "react";
export default class HelloClass extends Component {
  state = {
    text: "Random Title",
  };

  handleClick = () => {
    this.state.text === "Random Title"
      ? this.setState({ text: "hello world" })
      : this.setState({ text: "Random Title" });
  };
  render() {
    return (
      <div>
        <h1>{this.state.text}</h1>
        <button onClick={this.handleClick}>{this.state.text}</button>
      </div>
    );
  }
}
