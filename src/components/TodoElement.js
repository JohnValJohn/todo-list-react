import React, { Component } from "react";
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Button
} from "@material-ui/core";
import { connect } from "react-redux";
import { updateTodos } from "../actions/actionCreators";

class TodoElement extends Component {
  constructor(props) {
    super(props);
    this.handleClickOnDone = this.handleClickOnDone.bind(this);
  }
  handleClickOnDone() {
    const action = updateTodos(this.props.item);
    this.props.dispatch(action);
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
export default connect()(TodoElement);
