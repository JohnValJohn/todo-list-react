import React, { Component } from "react";
import TodoElement from "./TodoElement";
import { List, Grid, Card, CardHeader, CardContent } from "@material-ui/core";
import PropTypes from "prop-types";

class TodoList extends Component {
  render() {
    return (
      <Grid container justify="center">
        <Card>
          <CardHeader title={this.props.title} className="content__todo-list" />
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
      </Grid>
    );
  }
}

TodoList.propTypes = {
  items: PropTypes.array,
  title: PropTypes.string
};

export default TodoList;
