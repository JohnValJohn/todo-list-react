import * as types from "../actions/actionsTypes";

const initialState = { todos: [] };

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case types.UPDATE_TODOS:
      const unmodifiedTodos = state.todos.filter(todo => {
        return todo.id !== action.changedItem.id;
      });
      const changedItem = Object.assign({}, action.changedItem, { done: true });
      const newTodos = [...unmodifiedTodos, changedItem];
      return Object.assign({}, state, { todos: newTodos });
    case types.CREATE_TODOS:
      const newState = Object.assign({}, state, { todos: action.todos });
      return newState;
    default:
      return state;
  }
}

export default rootReducer;
