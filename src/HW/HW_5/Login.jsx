import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export function Login(props) {
  const history = useHistory();
  function handleSubmit() {
    if (props.verifyUser(currentUser)) {
      history.push("/main");
    }
    // try {
    //   await Auth.signIn(email, password);
    //   userHasAuthenticated(true);
    //   history.push("/");
    // } catch (e) {
    //   alert(e.message);
    // }
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

  // function setUserName(name) {
  //   const user = currentUser;
  //   user.name = name;
  //   setCurrentUser(user);
  // }
  // function changeLogin(event) {
  //   props.setUserLogin(event.target.value);
  // }
  // function changePassword(event) {
  //   props.setUserPassword(event.target.value);
  // }
  // function changeName(event) {
  //   props.setUserName(event.target.value);
  // }

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
