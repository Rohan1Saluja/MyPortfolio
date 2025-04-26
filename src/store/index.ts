import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { user } from "./user";
import { tasks } from "./tasks";

export const rootReducer = combineReducers({
  user,
  tasks,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});
