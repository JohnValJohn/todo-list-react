import React, { Component } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import Axios from "axios";
import { partition } from "lodash";
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";
import * as types from "./actions/actionsTypes";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
  }

  componentDidMount() {
    Axios.get("http://localhost:3001/todos").then(
      response => {
        const action = {
          type: types.CREATE_TODOS,
          todos: response.data
        };
        this.props.dispatch(action);
      },
      error => {
        console.log(error);
      }
    );
  }

  render() {
    const [todoItems, doneItems] = partition(this.props.items, item => {
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

function mapStateToProps(state) {
  return {
    items: state.todos
  };
}

export default connect(mapStateToProps)(App);
