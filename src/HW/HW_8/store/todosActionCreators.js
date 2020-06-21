import * as types from "./actionTypes";

export const addTodo = (todo) => ({ type: types.ADD_TODO, todo });

export const loadTodo = () => {
  return async (dispatch) => {
    const resp = await fetch("http://localhost:3004/todos");
    const data = await resp.json();
    dispatch({ type: types.LOAD_TODO, data });
  };
};

export const setTab = (tab) => ({ type: types.SET_TAB, tab });
export const changeTodoStatus = (id, status) => ({
  type: types.CHANGE_TODO_STATUS,
  id,
  status,
});
