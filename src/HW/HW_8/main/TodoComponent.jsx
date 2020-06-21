import React, { useEffect } from "react";
import { Todos } from "../components/Todos";
import { AddForm } from "../components/AddForm";
import { SelectTab } from "../components/SelectTab";
import styles from "./todoComponent.module.css";

export const TodoComponent = ({
  todos,
  tab,
  addTodo,
  changeTodoStatus,
  setTab,
  loadTodo,
}) => {
  useEffect(() => {
    loadTodo();
  }, [loadTodo]);

  return (
    <div className={styles.todo_wrap}>
      <>
        <h1>ToDo list</h1>
        <AddForm addTodo={addTodo} />
        <SelectTab tab={tab} setTab={setTab} />
        <Todos
          todos={todos}
          changeTodoStatus={(id, status) => changeTodoStatus(id, status)}
        />
      </>
    </div>
  );
};
