import React, { Component } from "react";
import TodoList from "./components/TodoList";
import Axios from "axios";
import { partition } from "lodash";
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";
import { createTodos } from "./actions/actionCreators";
import PropTypes from "prop-types";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
  }

  componentDidMount() {
    Axios.get("http://localhost:3001/todos").then(
      response => {
        this.props.createTodos(response.data);
        // this.props.dispatch(action);
      },
      error => {
        console.log(error);
      }
    );
  }

  render() {
    const [todoItems, doneItems] = partition(this.props.items, item => {
      return item.done === false;
    });

    return (
      <div className="App">
        <div className="todo-container content">
          <TodoList items={todoItems} title="To do" canHaveDoneButton={true} />

          <TodoList items={doneItems} title="Done" canHaveDoneButton={false} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.todos
  };
}

App.propTypes = {
  items: PropTypes.array
};

export default connect(
  mapStateToProps,
  { createTodos }
)(App);
