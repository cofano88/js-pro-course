import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Nav } from "./Nav";
import { RoutedContent } from "./RoutedContent";
import { AddForm } from "./AddForm";
export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        { id: 0, name: "wash", description: "do it now", status: "current" },
        { id: 1, name: "run", description: "do it", status: "current" },
        { id: 2, name: "cook", description: "do it later", status: "checked" },
        {
          id: 3,
          name: "dress",
          description: "do it tomorrow",
          status: "removed",
        },
      ],
    };
    this.addTodo = this.addTodo.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
  }

  addTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo],
    });
  }

  changeStatus(id, toStatus) {
    let { todos } = this.state;
    todos[id].status = toStatus;
    this.setState({ todos: todos });
  }

  render() {
    const { todos } = this.state;
    return (
      <BrowserRouter>
        <h1 className="title">To do</h1>
        {/* <button className="addTodoBtn">Add</button> */}
        <AddForm addTodo={(todo) => this.addTodo(todo)} todos={todos} />
        <Nav />
        <RoutedContent
          todos={todos}
          changeStatus={(id, toStatus) => this.changeStatus(id, toStatus)}
        />
      </BrowserRouter>
    );
  }
}
