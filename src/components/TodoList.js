import React, { Component } from "react";
import TodoElement from "./TodoElement";
import {
  List,
  Paper,
  Grid,
  Card,
  CardHeader,
  CardContent
} from "@material-ui/core";

export default class TodoList extends Component {
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
                  text={item.text}
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
