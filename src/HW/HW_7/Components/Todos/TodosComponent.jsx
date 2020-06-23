import React, { useState } from "react";

export function TodosComponent({ todos, changeTodoStatus }) {
  const [listType, setListType] = useState("current");

  return (
    <>
      <div className="Todos-wrapper">
        <div className="ListTypeRadio">
          <input
            type="radio"
            id="status_1"
            name="status"
            value="current"
            checked={listType === "current"}
            onChange={(e) => {
              setListType(e.target.value);
            }}
          />
          <label for="status_1">current</label>

          <input
            type="radio"
            id="status_2"
            name="status"
            value="checked"
            checked={listType === "checked"}
            onChange={(e) => {
              setListType(e.target.value);
            }}
          />
          <label for="status_2">checked</label>

          <input
            type="radio"
            id="status_3"
            name="status"
            value="removed"
            checked={listType === "removed"}
            onChange={(e) => {
              setListType(e.target.value);
            }}
          />
          <label for="status_3">removed</label>
        </div>
      </div>

      <div className="Content">
        <ul className="Todos">
          {todos
            .filter((todo) => todo.status === listType)
            .map((todo) => (
              <li className="Todo">
                <div>{todo.todoName}</div>
                <div>{todo.status}</div>
                <div classname="TodoTools">
                  {todo.status === "current" ? (
                    <div>
                      <button
                        onClick={() => {
                          changeTodoStatus(todo.id, "checked");
                        }}
                      >
                        checked
                      </button>
                    </div>
                  ) : todo.status === "checked" ? (
                    <div>
                      <button>remove</button>
                    </div>
                  ) : (
                    <div>
                      <button>restore</button>
                    </div>
                  )}
                </div>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}
