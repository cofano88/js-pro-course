import React from "react";
import { Switch, Route } from "react-router-dom";
import { Current } from "./Current";
import { Checked } from "./Checked";
import { Removed } from "./Removed";

export class RoutedContent extends React.Component {
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Current
              todos={this.props.todos}
              changeStatus={(id, toStatus) =>
                this.props.changeStatus(id, toStatus)
              }
            />
          )}
        ></Route>
        <Route
          exact
          path="/checked"
          render={() => (
            <Checked
              todos={this.props.todos}
              changeStatus={(id, toStatus) =>
                this.props.changeStatus(id, toStatus)
              }
            />
          )}
        ></Route>
        <Route
          exact
          path="/removed"
          render={() => (
            <Removed
              todos={this.props.todos}
              changeStatus={(id, toStatus) =>
                this.props.changeStatus(id, toStatus)
              }
            />
          )}
        ></Route>
      </Switch>
    );
  }
}
