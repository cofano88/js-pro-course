import React from "react";

export class ChangeStatusBtn extends React.Component {
  render() {
    return (
      <button
        className="ChangeStatusBtn"
        onClick={() => {
          this.props.changeStatus(this.props.id, this.props.toStatus);
        }}
      >
        to {this.props.toStatus}
      </button>
    );
  }
}
