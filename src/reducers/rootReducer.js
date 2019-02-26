const initialState = { todos: [] };

function rootReducer(state = initialState, action) {
  if (action.type === "UPDATE_TODOS") {
    const unmodifiedTodos = state.todos.filter(todo => {
      return todo.id !== action.changedItem.id;
    });
    const changedItem = Object.assign({}, action.changedItem, { done: true });
    const newTodos = [...unmodifiedTodos, changedItem];
    return Object.assign({}, state, { todos: newTodos });
  }
  if (action.type === "CREATE_TODOS") {
    console.log(JSON.stringify(action));
    const newState = Object.assign({}, state, { todos: action.todos });
    console.log(JSON.stringify(newState));
    return newState;
  }
  return state;
}

export default rootReducer;
