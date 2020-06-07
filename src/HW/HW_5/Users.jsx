import React from "react";

export function Users(props) {
  const usersData = props.usersData;
  // const list = [
  //   <li>{props.usersData[2].login}</li>,
  //   <li>{props.usersData[2].login}</li>,
  // ];
  return (
    <>
      <h3>Users list:</h3>
      <ul>
        {usersData.map((user) => (
          <li>
            <div>{user.login}</div>
            <div>{user.password}</div>
            <div>{user.name}</div>
          </li>
        ))}
      </ul>
    </>
  );
}
