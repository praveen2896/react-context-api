import React, { Component } from "react";

export const MyContext = React.createContext();

export default class Provider extends Component {
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
