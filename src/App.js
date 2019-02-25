import React, { Component } from "react";
import "./App.css";
import TodoList from "./components/TodoList";

class App extends Component {
  render() {
    const items = [
      { id: 1, text: "Learn React" },
      { id: 2, text: "Go to sleep early" }
    ];

    return (
      <div className="App">
        <TodoList items={items} />
      </div>
    );
  }
}

export default App;
