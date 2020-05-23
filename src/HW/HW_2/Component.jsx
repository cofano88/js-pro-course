import React from "react";
import "./component.css";

export class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  decrement() {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1,
      });
    }
  }
  reload() {
    this.setState({
      count: 0,
    });
  }

  render() {
    return (
      <>
        <div className="clicker">
          <div className="counter">{this.state.count}</div>
          <div className="panel">
            <button className="increment" onClick={() => this.increment()}>
              +
            </button>
            <button className="reload" onClick={() => this.reload()}>
              RELOAD
            </button>
            <button className="decrement" onClick={() => this.decrement()}>
              -
            </button>
          </div>
        </div>
      </>
    );
  }
}
