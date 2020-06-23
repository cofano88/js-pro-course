import React from "react";
import { Link } from "react-router-dom";

export class Nav extends React.Component {
  render() {
    return (
      <ul>
        <li>
          <Link to="/">CURRENT</Link>
        </li>
        <li>
          <Link to="/checked">CHECKED</Link>
        </li>
        <li>
          <Link to="/removed">REMOVED</Link>
        </li>
      </ul>
    );
  }
}
