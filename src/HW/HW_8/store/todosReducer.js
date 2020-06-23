import {
  ADD_TODO,
  CHANGE_TODO_STATUS,
  SET_TAB,
  LOAD_TODO,
} from "./actionTypes";

const initialState = {
  todos: [
    // { id: "1", todoName: "to dress", status: "current" },
    // { id: "2", todoName: "to swim", status: "checked" },
    // { id: "3", todoName: "to eat", status: "removed" },
  ],
  tab: "current",
};

export const todos = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TODO: {
      return { ...state, todos: [...state.todos, action.todo] };
    }
    case LOAD_TODO: {
      return { ...state, todos: action.data };
    }
    case CHANGE_TODO_STATUS: {
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.id) {
            return { ...todo, status: action.status };
          }
          return todo;
        }),
      };
    }
    case SET_TAB: {
      return { ...state, tab: action.tab };
    }
    default:
      return state;
  }
};
