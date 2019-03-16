import React, { Component } from "react";
import "./App.css";

//make new context
const MyContext = React.createContext();

//then create a provider(context provider)
class MyProvider extends Component {
  //put all the data which we are using in overall components
  state = {
    name: "praveen",
    age: 22,
    Company: "wipro"
  };
  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          growYearOlder: () => {
            this.setState({
              age: this.state.age + 1
            });
          }
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

const Family = props => (
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
      <MyProvider>
        <div className="App">Hi i am praveen</div>
        <Family />
      </MyProvider>
    );
  }
}

export default App;
