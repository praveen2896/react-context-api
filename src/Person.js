import React, { Component } from "react";
import { MyContext } from "./provider";

export default class Person extends Component {
  render() {
    return (
      <div className="Person">
        <h1>Person component</h1>
        {/* access the data from store  it will contains inside the context tag only*/}
        {/* if you want access more than one data use React.fragment,because this function returns one element only */}
        <MyContext.Consumer>
          {context => (
            <React.Fragment>
              <p>I am {context.state.name}</p>
              <p>{context.state.name}</p>
              <button
                onClick={() => {
                  context.changeName("person");
                }}
              >
                person
              </button>
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
