import { TodosComponent } from "./TodosComponent";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  changeTodoStatus: (id, status) => {
    dispatch({ type: "CHANGE_TODO_STATUS", id: id, status: status });
  },
});

export const Todos = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodosComponent);
