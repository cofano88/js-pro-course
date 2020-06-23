import { createStore } from "redux";
import { data } from "./Reducers/data";
import { devToolsEnhancer } from "redux-devtools-extension";

export const store = createStore(data, devToolsEnhancer());
