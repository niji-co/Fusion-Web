import { combineReducers } from "@reduxjs/toolkit";
import { projectReducer } from "../pages/Project";

const rootReducer = combineReducers({
  project: projectReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
