import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  increace = () => {
    this.setState((num) => ({
      count: num.count + 1,
    }));
  };
  decrece = () => {
    this.setState((num) => ({
      count: num.count - 1,
    }));
  };
  render() {
    return (
      <div style={{

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        fontFamily: "Arial",
        fontSize: "20px",
      }
      }>
        <h5>Counter :</h5><br /> <br />
        <button style={{
          backgroundColor: "black",
          color: "white",
          marginLeft: "20px",
          height: "30px",
          width: "30px",
        }} onClick={this.decrece}>-</button>


        <button style={{
          backgroundColor: "black",
          color: "white",
          height: "30px",
          width: "30px",
          marginLeft: "10px",
        }}>{this.state.count}</button>


        <button style={{
          backgroundColor: "black",
          color: "white",
          height: "30px",
          width: "30px",
          marginLeft: "10px",
        }} onClick={this.increace}>+</button>
      </div>
    );
  }
}

export default Counter;