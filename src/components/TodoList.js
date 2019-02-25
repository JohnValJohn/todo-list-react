import React, { Component } from "react";
import TodoElement from "./TodoElement";
import { List, Paper, Grid } from "@material-ui/core";

export default class TodoList extends Component {
  render() {
    return (
      <Grid container justify="center">
        <Paper>
          <List>
            {this.props.items.map(item => (
              <TodoElement key={item.id} text={item.text} />
            ))}
          </List>
        </Paper>
      </Grid>
    );
  }
}
