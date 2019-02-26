import * as types from "./actionsTypes";

export function updateTodos(changedItem) {
  return function(dispatch) {
    dispatch({ type: types.UPDATE_TODOS, changedItem });
  };
}

export function createTodos(todos) {
  return { type: types.CREATE_TODOS, todos };
}
