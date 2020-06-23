import React from "react";

export class AddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      status: "",
    };
    this.changeName = this.changeName.bind(this);
    this.changeDescription = this.changeDescription.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.makeToDo = this.makeToDo.bind(this);
  }

  makeToDo() {
    const toDo = {};
    toDo.name = this.state.name;
    toDo.description = this.state.description;
    toDo.status = this.state.status;
    toDo.id = this.props.todos.length;
    this.props.addTodo(toDo);
    this.setState({ name: "" });
    this.setState({ description: "" });
    this.setState({ status: "" });
  }
  changeName(event) {
    this.setState({ name: event.target.value });
  }
  changeDescription(event) {
    this.setState({ description: event.target.value });
  }
  changeStatus(event) {
    this.setState({ status: event.target.value });
  }
  render() {
    return (
      <>
        <input
          type="text"
          placeholder="todo name"
          value={this.state.name}
          onChange={this.changeName}
        />
        <input
          type="text"
          placeholder="todo description"
          value={this.state.description}
          onChange={this.changeDescription}
        />
        <p>Please select todo status:</p>
        <div>
          <input
            type="radio"
            id="status_1"
            name="status"
            value="current"
            checked={this.state.status === "current"}
            onChange={this.changeStatus}
          />
          <label for="status_1">current</label>

          <input
            type="radio"
            id="status_2"
            name="status"
            value="checked"
            checked={this.state.status === "checked"}
            onChange={this.changeStatus}
          />
          <label for="status_2">checked</label>

          <input
            type="radio"
            id="status_3"
            name="status"
            value="removed"
            checked={this.state.status === "removed"}
            onChange={this.changeStatus}
          />
          <label for="status_3">removed</label>
        </div>
        <button className="AddBtnForm" onClick={() => this.makeToDo()}>
          add todo
        </button>
        {/* <button className="CancelBtnForm">cancel</button> */}
      </>
    );
  }
}
