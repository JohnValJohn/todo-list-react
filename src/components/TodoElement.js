import React, { Component } from "react";
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction
} from "@material-ui/core";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Button from "./Button.js";

class TodoElement extends Component {
  constructor(props) {
    super(props);
    this.handleClickOnDone = this.handleClickOnDone.bind(this);
  }
  handleClickOnDone() {
    this.props.updateTodos(this.props.item);
  }

  render() {
    return (
      <ListItem>
        <ListItemText primary={this.props.item.text} />
        <ListItemSecondaryAction>
          {this.props.canHaveDoneButton && (
            <Button variant="outlined" onClick={this.handleClickOnDone}>
              Done
            </Button>
          )}
        </ListItemSecondaryAction>
      </ListItem>
    );
  }
}
TodoElement.propTypes = {
  canHaveDoneButton: PropTypes.bool,
  item: PropTypes.object
};

const mapDispatch = dispatch => ({
  updateTodos: dispatch.todos.updateTodos
});

export default connect(
  undefined,
  mapDispatch
)(TodoElement);
