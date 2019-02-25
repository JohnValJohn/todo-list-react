import React, { Component } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import Axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
  }

  componentDidMount() {
    Axios.get("http://localhost:3001/todos").then(
      response => {
        this.setState({
          items: response.data
        });
      },
      error => {
        console.log(error);
      }
    );
  }

  render() {
    const todoItems = this.state.items.filter(item => {
      return item.done === false;
    });
    return (
      <div className="App">
        <TodoList items={todoItems} />
      </div>
    );
  }
}

export default App;
