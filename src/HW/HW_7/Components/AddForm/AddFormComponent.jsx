import React, { useState } from "react";
import { FormRadioInput } from "./FormRadioInput";
export function AddFormComponent({ add_todo }) {
  const [inputNameTodo, setInputNameTodo] = useState("");
  const [inputStatusTodo, setInputStatusTodo] = useState("removed");

  function AddTodo() {
    const todo = {};
    todo.id = Date.now().toString();
    todo.todoName = inputNameTodo;
    todo.status = inputStatusTodo;
    add_todo(todo);
    setInputNameTodo("");
    setInputStatusTodo("");
  }

  return (
    <div className="Form-Wrapper">
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

        {/* <input
          type="radio"
          id="status_1"
          name="status"
          value="current"
          checked={inputStatusTodo === "current"}
          onChange={(e) => {
            setInputStatusTodo(e.target.value);
          }}
        />
        <label for="status_1">current</label>

        <input
          type="radio"
          id="status_2"
          name="status"
          value="checked"
          checked={inputStatusTodo === "checked"}
          onChange={(e) => {
            setInputStatusTodo(e.target.value);
          }}
        />
        <label for="status_2">checked</label>

        <input
          type="radio"
          id="status_3"
          name="status"
          value="removed"
          checked={inputStatusTodo === "removed"}
          onChange={(e) => {
            setInputStatusTodo(e.target.value);
          }}
        />
        <label for="status_3">removed</label> */}
      </div>
      <button className="AddTodoBtn" onClick={() => AddTodo()}>
        Add
      </button>
    </div>
  );
}
