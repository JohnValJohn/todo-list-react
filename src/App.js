import React, { Component } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import Axios from "axios";
import { partition } from "lodash";

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
    const [todoItems, doneItems] = partition(this.state.items, item => {
      return item.done === false;
    });

    console.log(todoItems);
    console.log(doneItems);

    return (
      <div className="App">
        <TodoList items={todoItems} />
        <TodoList items={doneItems} />
      </div>
    );
  }
}

export default App;
