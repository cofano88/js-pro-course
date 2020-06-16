import { createStore, combineReducers } from "redux";
import { counter } from "./reducers/counter";
import { five } from "./reducers/five";
import { devToolsEnhancer } from "redux-devtools-extension";
const reducers = combineReducers({
  counter,
  five,
});

export const store = createStore(reducers, devToolsEnhancer());
