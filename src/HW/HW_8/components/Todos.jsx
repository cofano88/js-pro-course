import React from "react";
import { TodoItem } from "./TodoItem";

export const Todos = ({ todos, changeTodoStatus }) => {
  return (
    <ul>
      <h4>Todos:</h4>
      {todos.map(({ todoName, id, status }) => (
        <TodoItem
          key={id}
          todoName={todoName}
          status={status}
          id={id}
          changeTodoStatus={(id, status) => changeTodoStatus(id, status)}
        />
      ))}
    </ul>
  );
};
