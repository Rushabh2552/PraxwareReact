import React, { Component } from "react";

export class DidMount extends Component {
  constructor() {
    console.log("constructor called");
    super();
    this.state = {
      num: 1,
    };
  }
  render() {
    console.log("render method method");
    return (
      <div>
        <h1>DidMount Method</h1>
        <h1>{this.state.num}</h1>
        <button onClick={()=>this.setState({num: this.state.num + 1})}>Increment</button>
      </div>
    );
  }

  componentDidMount() {
    console.log("componnetsDidMount");
  }

}

export default DidMount;
