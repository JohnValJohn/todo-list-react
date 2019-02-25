import React, { Component } from "react";
import { ListItem, ListItemText } from "@material-ui/core";

export default class TodoElement extends Component {
  render() {
    return (
      <ListItem>
        <ListItemText primary={this.props.text} />
      </ListItem>
    );
  }
}
