import React, { Component } from "react";
import TodoElement from "./TodoElement";
import { List, Card, CardHeader, CardContent } from "@material-ui/core";
import PropTypes from "prop-types";

class TodoList extends Component {
  render() {
    return (
      <Card className="content__todo-list">
        <CardHeader title={this.props.title} />
        <CardContent>
          <List>
            {this.props.items.map(item => (
              <TodoElement
                key={item.id}
                item={item}
                canHaveDoneButton={this.props.canHaveDoneButton}
              />
            ))}
          </List>
        </CardContent>
      </Card>
    );
  }
}

TodoList.propTypes = {
  items: PropTypes.array,
  title: PropTypes.string
};

export default TodoList;
