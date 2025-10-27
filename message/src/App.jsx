import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      message: "hi what you doing",
    };
  }

  showAnswer = () => {
    this.setState({ message: "im writing some react code" });
  };

  showQuestion = () => {
    this.setState({ message: "hi what you doing" });
  };

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Message Toggle App</h2>
        <p>{this.state.message}</p>
        <button onClick={this.showAnswer}>Answer</button>
        <button onClick={this.showQuestion}>Question</button>
      </div>
    );
  }
}

export default App;
