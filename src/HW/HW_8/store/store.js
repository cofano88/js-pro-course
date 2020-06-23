import { todos } from "./todosReducer";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(
  todos,
  composeWithDevTools(applyMiddleware(thunk))
);
