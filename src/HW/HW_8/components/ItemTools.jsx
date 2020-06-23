import React from "react";

export function ItemTools({ status, id, changeTodoStatus }) {
  return (
    <div classname="todoTools-wrap">
      {status === "current" ? (
        <div>
          <button
            onClick={() => {
              changeTodoStatus(id, "checked");
            }}
          >
            checked
          </button>
        </div>
      ) : status === "checked" ? (
        <div>
          <button
            onClick={() => {
              changeTodoStatus(id, "removed");
            }}
          >
            remove
          </button>
        </div>
      ) : (
        <div>
          <button
            onClick={() => {
              changeTodoStatus(id, "current");
            }}
          >
            restore
          </button>
        </div>
      )}
    </div>
  );
}
