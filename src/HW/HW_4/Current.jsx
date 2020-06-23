import React from "react";
import { ChangeStatusBtn } from "./ChangeStatusBtn";

export class Current extends React.Component {
  render() {
    const todos = this.props.todos.filter((item) => item.status === "current");
    return (
      <ul>
        {todos.map((todo) => (
          <Todo
            todo={todo}
            key={todo.id}
            changeStatus={(id, toStatus) =>
              this.props.changeStatus(id, toStatus)
            }
          ></Todo>
        ))}
      </ul>
    );
  }
}

export class Todo extends React.Component {
  render() {
    return (
      <li className="todo">
        <div>{this.props.todo.name}</div>
        <div>{this.props.todo.description}</div>
        <div>{this.props.todo.status}</div>
        <ChangeStatusBtn
          changeStatus={(id, toStatus) => this.props.changeStatus(id, toStatus)}
          toStatus="checked"
          id={this.props.todo.id}
        />
        <ChangeStatusBtn
          changeStatus={(id, toStatus) => this.props.changeStatus(id, toStatus)}
          toStatus="removed"
          id={this.props.todo.id}
        />
      </li>
    );
  }
}
