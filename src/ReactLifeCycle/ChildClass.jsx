import React, { Component } from "react";

export class ChildClass extends Component {
  render() {
    return (
      <div>
        <h1>Child Component</h1>
      </div>
    );
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
}

export default ChildClass;
