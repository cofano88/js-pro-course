import { AddFormComponent } from "./AddFormComponent";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => ({
  add_todo: (todo) => {
    dispatch({ type: "ADD_TODO", todo: todo });
  },
});

export const AddForm = connect(null, mapDispatchToProps)(AddFormComponent);
