import React, { useState } from "react";
import { Link } from "react-router-dom";

export function Register(props) {
  const [currentUser, setCurrentUser] = useState({});
  function setUserLogin(event) {
    const user = currentUser;
    user.login = event.target.value;
    setCurrentUser(user);
  }
  function setUserPassword(event) {
    const user = currentUser;
    user.password = event.target.value;
    setCurrentUser(user);
  }
  function setUserName(event) {
    const user = currentUser;
    user.name = event.target.value;
    setCurrentUser(user);
  }
  return (
    <form>
      <label>
        Login
        <input type="text" value={currentUser.login} onChange={setUserLogin} />
      </label>
      <label>
        Password
        <input
          type="text"
          value={currentUser.password}
          onChange={setUserPassword}
        />
      </label>
      <label>
        Name
        <input type="text" value={currentUser.name} onChange={setUserName} />
      </label>
      <input
        type="button"
        value="register"
        onClick={() => props.addUser(currentUser)}
      />
      <button>
        <Link to="/login">exit</Link>
      </button>
    </form>
  );
}
