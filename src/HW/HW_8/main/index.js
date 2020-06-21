import { connect } from "react-redux";
import {
  addTodo,
  setTab,
  changeTodoStatus,
  loadTodo,
} from "../store/todosActionCreators";
import { getTabTodos } from "../store/todosSelector";
import { TodoComponent } from "./TodoComponent";

const mapStateToProps = (state) => ({
  todos: getTabTodos(state),
  tab: state.tab,
});

const actionCreators = {
  addTodo,
  changeTodoStatus,
  setTab,
  loadTodo,
};

export const Todo = connect(mapStateToProps, actionCreators)(TodoComponent);
