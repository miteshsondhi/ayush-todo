import React, { Component } from "react";
import TodoInput from "./components/TodoInput";
class App extends Component {
  render() {
    return (
      <div>
        Hello from main App
        <TodoInput />
      </div>
    );
  }
}

export default App;
