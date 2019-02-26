export function updateTodos(changedItem) {
  return { type: "UPDATE_TODOS", changedItem };
}

export function createTodos(todos) {
  return { type: "CREATE_TODOS", todos };
}
