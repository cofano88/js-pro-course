import React from "react";

export function Header(props) {
  const user = props.currentUser;
  return (
    <ul>
      <li>
        <div>{user.login}</div>
        <div>{user.password}</div>
        <div>{user.name}</div>
      </li>
    </ul>
  );
}
