import React from "react";

export function FormRadioInput(props) {
  return (
    <>
      <input
        type="radio"
        id={props.id}
        name="status"
        value={props.type}
        checked={props.inputStatusTodo === props.type}
        onChange={(e) => {
          props.setInputStatusTodo(e.target.value);
        }}
      />
      <label for={props.id}>{props.type}</label>
    </>
  );
}
