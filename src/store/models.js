export const todos = {
  state: [],
  reducers: {
    createTodos(state, payload) {
      const newState = payload;
      return newState;
    },
    updateTodos(state, item) {
      const unmodifiedTodos = state.filter(todo => {
        return todo.id !== item.id;
      });
      const changedItem = Object.assign({}, item, { done: true });
      const newTodos = [...unmodifiedTodos, changedItem];
      return newTodos;
    }
  }
};
