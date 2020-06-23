import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Users } from "./Users";
import { Home } from "./Home";
import { Header } from "./Header";
import { SideMenu } from "./SideMenu";

export function Main(props) {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route
            path="/main"
            render={() => (
              <>
                <Header currentUser={props.currentUser} />
                <SideMenu />
                <Home />
              </>
            )}
          ></Route>
          <Route
            path="/users"
            render={() => (
              <>
                <Header currentUser={props.currentUser} />
                <SideMenu />
                <Users usersData={props.usersData} />
              </>
            )}
          ></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}
