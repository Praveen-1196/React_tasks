import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      number: 0,
    };
  }

  generateRandomNumber = () => {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    this.setState({ number: randomNum });
  };

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Random Number Generator</h2>
        <p>Number: {this.state.number}</p>
        <button onClick={this.generateRandomNumber}>Generate</button>
      </div>
    );
  }
}

export default App;
