import React, { Component } from "react";
import "./App.css";
import { MyContext } from "./provider";
import Provider from "./provider";

const Family = () => (
  <div className="family">
    <MyContext.Consumer>
      {context => (
        <React.Fragment>
          <button onClick={context.growYearOlder}>Age</button>
        </React.Fragment>
      )}
    </MyContext.Consumer>
    <Person />
  </div>
);

class Person extends Component {
  render() {
    return (
      <div className="Person">
        {/* access the data from store  it will contains inside the context tag only*/}
        {/* if you want access more than one data use React.fragment,because this function returns one element only */}
        <MyContext.Consumer>
          {context => (
            <React.Fragment>
              <p>I am {context.state.name}</p>
              <p>{context.state.age} old</p>
              <p>Working in {context.state.Company}</p>
              <button onClick={context.growYearOlder}>Age</button>
            </React.Fragment>
          )}
        </MyContext.Consumer>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">Hi i am praveen</div>
        <Family />
      </Provider>
    );
  }
}

export default App;
