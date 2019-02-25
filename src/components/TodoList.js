import React, { Component } from "react";
import TodoElement from "./TodoElement";
import { List, Paper, Grid } from "@material-ui/core";

export default class TodoList extends Component {
  render() {
    const items = [
      { id: 1, text: "Learn React" },
      { id: 2, text: "Go to sleep early" }
    ];

    return (
      <Grid container justify="center">
        <Paper>
          <List>
            <TodoElement text="todo1" />
            <TodoElement text="todo2" />
          </List>
        </Paper>
      </Grid>
    );
  }
}
