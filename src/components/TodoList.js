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
            {items.map(item => (
              <TodoElement key={item.id} text={item.text} />
            ))}
          </List>
        </Paper>
      </Grid>
    );
  }
}
