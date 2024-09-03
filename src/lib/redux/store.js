import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./slice";

export const store = configureStore({
  reducer: {
    root: rootReducer,
  },
});
