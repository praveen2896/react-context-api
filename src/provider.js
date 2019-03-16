import React, { Component } from "react";

//make new context
export const MyContext = React.createContext();

//then create a provider(context provider)
export default class Provider extends Component {
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
          },
          decreaseAge: () => {
            this.setState({
              age: this.state.age - 1
            });
          },
          changeName: name => {
            this.setState({ name });
          }
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}
