export const getTabTodos = (state) => {
  return state.todos.filter((todo) => todo.status === state.tab);
};
