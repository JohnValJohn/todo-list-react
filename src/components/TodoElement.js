import React, { Component } from "react";
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Button
} from "@material-ui/core";

export default class TodoElement extends Component {
  constructor(props) {
    super(props);
    this.handleClickOnDone = this.handleClickOnDone.bind(this);
  }
  handleClickOnDone() {
    console.log("you clicked on done" + this.props.item.id);
  }

  render() {
    return (
      <ListItem>
        <ListItemText primary={this.props.item.text} />
        <ListItemSecondaryAction>
          {this.props.canHaveDoneButton ? (
            <Button variant="outlined" onClick={this.handleClickOnDone}>
              Done
            </Button>
          ) : (
            <span />
          )}
        </ListItemSecondaryAction>
      </ListItem>
    );
  }
}
