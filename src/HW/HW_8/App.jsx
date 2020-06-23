import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { Todo } from "./main";

export const App = () => {
  return (
    <Provider store={store}>
      <Todo />
    </Provider>
  );
};

export default App;
