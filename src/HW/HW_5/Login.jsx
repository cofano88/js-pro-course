import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export function Login(props) {
  const history = useHistory();
  function handleSubmit() {
    if (props.verifyUser(currentUser)) {
      history.push("/main");
    }
  }
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
      <input type="button" onClick={handleSubmit} value="submit" />
      <button>
        <Link to="/register">register</Link>
      </button>
    </form>
  );
}
