import React, { Component } from "react";
import logo from "./logo.svg";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: "Loading.."
    };
  }
  componentDidMount() {
    axios
      .get("/api/")
      .then(res => this.setState({ response: res.data }))
      .catch(err => this.setState({ response: err }));
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <p>Response is {this.state.response}</p>
        </header>
      </div>
    );
  }
}

export default App;
