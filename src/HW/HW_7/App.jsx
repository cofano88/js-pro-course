import React from "react";
import { Provider } from "react-redux";
import { Todos } from "./Components/Todos/index";
import { AddForm } from "./Components/AddForm/index";
import { store } from "./Store/store";

export const App = () => {
  return (
    <Provider store={store}>
      <div className="app-wrapper">
        <h1>ToDo list</h1>;
        <AddForm />
        <Todos />
      </div>
    </Provider>
  );
};

export default App;
