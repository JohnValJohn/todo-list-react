import React, { Component } from "react";
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Button
} from "@material-ui/core";

export default class TodoElement extends Component {
  render() {
    return (
      <ListItem>
        <ListItemText primary={this.props.text} />
        <ListItemSecondaryAction>
          {this.props.canHaveDoneButton ? (
            <Button variant="outlined">Done</Button>
          ) : (
            <span />
          )}
        </ListItemSecondaryAction>
      </ListItem>
    );
  }
}
