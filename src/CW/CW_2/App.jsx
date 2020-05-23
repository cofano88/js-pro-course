import React from "react";

export class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: new Date(),
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => this.setState({ data: new Date() }), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    return (
      <>
        <div>{this.state.data.toLocaleString()}</div>
      </>
    );
  }
}
