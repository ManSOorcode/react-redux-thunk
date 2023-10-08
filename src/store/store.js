import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { userReducer } from "./reducer";

export const store = configureStore(
  { reducer: userReducer },
  applyMiddleware(thunk)
);
