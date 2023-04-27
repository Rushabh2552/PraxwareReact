import React, { Component } from "react";

export class DidUpdate extends Component {
  constructor() {
    console.log("constructor called");
    super();
    this.state = {
      num: 1,
    };
  }
  render() {
    console.log("render method");
    return (
      <div>
        <h1>getSnapshotBeforeUpdate Method</h1>
        <h1>{this.state.num}</h1>
        <button onClick={() => this.setState({ num: this.state.num + 1 })}>
          Increment
        </button>
      </div>
    );
  }

  getSnapshotBeforeUpdate(preProps, preState) {
    console.log('getSnapshotBeforeUpdate');
    return preState * 2;
  }
  componentDidUpdate(preProps, preState, snapshot) {
    console.log("componentDidUpdate", preProps, preState, snapshot);
    console.log(snapshot);
  }
}

export default DidUpdate;
