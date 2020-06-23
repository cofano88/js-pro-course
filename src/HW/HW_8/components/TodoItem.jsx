import React from "react";
import { ItemTools } from "./ItemTools";
import styles from "./todoItem.module.css";

export const TodoItem = ({ todoName, status, id, changeTodoStatus }) => {
  return (
    <li className={styles.item}>
      <div>{todoName}</div>
      <div>{status}</div>
      <ItemTools
        status={status}
        id={id}
        changeTodoStatus={(id, status) => changeTodoStatus(id, status)}
      />
    </li>
  );
};
