import React, { Component } from "react";
import Person from "./Person";
import { MyContext } from "./provider";

export default class Family extends Component {
  render() {
    return (
      <div>
        <div className="family">
          <h1>family comonent</h1>
          <MyContext.Consumer>
            {context => (
              <React.Fragment>
                <p>{context.state.name}</p>
                <button
                  onClick={() => {
                    context.changeName("family");
                  }}
                >
                  Family
                </button>
                <button onClick={context.decreaseAge}>Age</button>
              </React.Fragment>
            )}
          </MyContext.Consumer>
          <Person />
        </div>
      </div>
    );
  }
}
