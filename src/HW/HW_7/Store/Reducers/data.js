const initialState = {
  todos: [
    { id: "1", todoName: "to dress", status: "current" },
    { id: "2", todoName: "to swim", status: "checked" },
    { id: "3", todoName: "to eat", status: "removed" },
  ],
};

export const data = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO": {
      return { ...state, todos: [...state.todos, action.todo] };
    }
    case "CHANGE_TODO_STATUS": {
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.todoId) {
            return { ...todo, status: action.status };
          }
          return todo;
        }),
      };
    }
    default:
      return state;
  }
};
