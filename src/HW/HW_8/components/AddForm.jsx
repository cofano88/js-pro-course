import React, { useState } from "react";
import { FormRadioInput } from "./FormRadioInput";
import styles from "./addForm.module.css";

export const AddForm = ({ addTodo }) => {
  const [inputNameTodo, setInputNameTodo] = useState("");
  const [inputStatusTodo, setInputStatusTodo] = useState("current");
  function AddTodo() {
    const todo = {};
    todo.id = Date.now().toString();
    todo.todoName = inputNameTodo;
    todo.status = inputStatusTodo;
    addTodo(todo);
    setInputNameTodo("");
    setInputStatusTodo("");
  }

  return (
    <>
      <h4>Add new todo below:</h4>
      <div className={styles.addForm_wrap}>
        <label>
          ToDo name
          <input
            type="text"
            value={inputNameTodo}
            onChange={(e) => {
              setInputNameTodo(e.target.value);
            }}
          />
        </label>
        <div className="Radio">
          <FormRadioInput
            id={"status_1"}
            type={"current"}
            inputStatusTodo={inputStatusTodo}
            setInputStatusTodo={(value) => {
              setInputStatusTodo(value);
            }}
          />
          <FormRadioInput
            id={"status_2"}
            type={"checked"}
            inputStatusTodo={inputStatusTodo}
            setInputStatusTodo={(value) => {
              setInputStatusTodo(value);
            }}
          />
          <FormRadioInput
            id={"status_3"}
            type={"removed"}
            inputStatusTodo={inputStatusTodo}
            setInputStatusTodo={(value) => {
              setInputStatusTodo(value);
            }}
          />
        </div>
        <button className="AddTodoBtn" onClick={() => AddTodo()}>
          Add
        </button>
      </div>
    </>
  );
};
