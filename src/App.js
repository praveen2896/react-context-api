import React, { Component } from "react";
import "./App.css";
import Family from "./Family";
import Provider from "./provider";

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          Hi i am praveen
          <Family />
        </div>
      </Provider>
    );
  }
}

export default App;
