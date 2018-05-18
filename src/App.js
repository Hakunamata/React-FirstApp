import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi! I am a react App </h1>
        <p> This is really working </p>
        <Person name="shashank" age="23" />
        <Person name="Somendra" age="24">
          My Hobby is : Racing
        </Person>
        <Person name="sunil" age="24" />
      </div>
    );
    // return React.createElement("div",{ className: "App" },React.createElement("h1", null, "Does this looks good??"));
  }
}

export default App;
