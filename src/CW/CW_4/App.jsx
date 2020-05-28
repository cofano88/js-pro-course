import React from "react";
import { Item } from "./ToDoItem";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { id: 0, name: "Купить молоко", done: false, active: true },
        { id: 1, name: "Купить хлеб", done: true, active: true },
        { id: 2, name: "Купить масло", done: false, active: false },
      ],
    };
  }

  handleDone = (id) => {
    this.setState((oldState) => {
      // const stateCopy = _.cloneDeep(oldState);
      // stateCopy.list[id].done = !stateCopy.list[id].done;
      // return stateCopy;
      return {
        ...oldState,
        list: oldState.list.map((el) =>
          el.id === id ? { ...el, done: !el.done } : el
        ),
      };
    });
  };

  render() {
    let listItems = this.state.list.map((element, i) => {
      return (
        <Item
          key={element.id}
          checked={element.done}
          name={element.name}
          onDone={this.handleDone}
          id={element.id}
        ></Item>
      );
    });

    return <ul>{listItems}</ul>;
  }
}
