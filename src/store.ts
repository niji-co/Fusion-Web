import { configureStore } from "@reduxjs/toolkit";

import projectsReducer from "reducers/projectsReducer";
import { projectRowsReducer } from "../pages/Project/Row";

const store = configureStore({
  reducer: {
    projects: projectsReducer,
    projectRows: projectRowsReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
