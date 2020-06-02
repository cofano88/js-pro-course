import React, { useState } from "react";
import { Login } from "./Login";
import { Register } from "./Register";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import { Main } from "./Main";

export function App() {
  const [usersData, setUsersData] = useState([
    { login: "mike", password: 11111, name: "mike" },
    { login: "hannah", password: 55555, name: "hannah" },
  ]);
  const [currentUser, setCurrentUser] = useState();
  function verifyUser(user) {
    const users = usersData;
    for (let i = 0; i < users.length; i++) {
      if (users[i].login == user.login && users[i].password == user.password) {
        setCurrentUser(users[i]);
        return true;
      }
    }
  }
  //   const history = useHistory();
  function addUser(user) {
    const users = usersData;
    for (let i = 0; i < users.length; i++) {
      if (users[i].login == user.login && users[i].password == user.password) {
        alert("this user has already added!");
      } else {
        const users = usersData;
        users.push(user);
        setUsersData(users);
        setCurrentUser(user);
        // history.push("/main");
      }
    }
  }
  //   const [currentUser, setCurrentUser] = useState({});
  //   function setUserLogin(login) {
  //     const user = currentUser;
  //     user.login = login;
  //     setCurrentUser(user);
  //   }
  //   function setUserPassword(password) {
  //     const user = currentUser;
  //     user.password = password;
  //     setCurrentUser(user);
  //   }
  //   function setUserName(name) {
  //     const user = currentUser;
  //     user.name = name;
  //     setCurrentUser(user);
  //   }

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route
            path="/main"
            render={() => (
              <Main usersData={usersData} currentUser={currentUser} />
            )}
          ></Route>
          <Route
            path="/login"
            render={() => (
              <Login
                usersData={usersData}
                verifyUser={(user) => verifyUser(user)}
              />
            )}
          ></Route>
          <Route
            path="/register"
            render={() => <Register addUser={(user) => addUser(user)} />}
          ></Route>
          <Redirect to="/login" />
        </Switch>
      </BrowserRouter>
    </>
  );
}
