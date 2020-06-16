import React, { useState } from "react";
import { Login } from "./Login";
import { Register } from "./Register";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import { Main } from "./Main";
import data from "./users.json";

export function App() {
  const [usersData, setUsersData] = useState(data.users);
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
        break;
      }
    }
  }

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
