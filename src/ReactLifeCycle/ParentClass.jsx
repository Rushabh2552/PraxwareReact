import React, { Component } from "react";
import ChildClass from "./ChildClass";

export class ParentClass extends Component {
  constructor() {
    console.log("constructor called");
    super();
    this.state = {
      toggle: false,
    };
  }
  render() {
    console.log("render called");
    return (
      <div>
        {this.state.toggle ? <h1>Parent Class</h1> : <ChildClass />}
        <button onClick={() => this.setState({ toggle: !this.state.toggle })}>
          Switch button
        </button>
      </div>
    );
  }
}

export default ParentClass;
