import React, { Component } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import Axios from "axios";
import { partition } from "lodash";
import { Grid } from "@material-ui/core";

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

    return (
      <div className="App">
        <Grid container justify="center" spacing={24} className="content">
          <Grid item>
            <TodoList
              items={todoItems}
              title="To do"
              canHaveDoneButton={true}
            />
          </Grid>
          <Grid item>
            <TodoList
              items={doneItems}
              title="Done"
              canHaveDoneButton={false}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
