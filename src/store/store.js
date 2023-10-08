import { configureStore, applyMiddleware } from "@reduxjs/toolkit";

import thunk from "redux-thunk";
import { userReducer } from "./reducer";
import { composeWithDevTools } from "@redux-devtools/extension";
export const store = configureStore(
  { reducer: userReducer },
  composeWithDevTools(applyMiddleware(thunk))
);
