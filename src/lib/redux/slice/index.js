import { combineReducers } from "@reduxjs/toolkit";
import devReducer from "./devSlice";
import authReducer from "./authSlice";

export const rootReducer = combineReducers({
  devs: devReducer,
  auth: authReducer,
});
