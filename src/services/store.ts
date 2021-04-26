import { configureStore } from "@reduxjs/toolkit";

import { projectsReducer } from "../pages/Project";
import { projectRowsReducer } from "../pages/Project/Row";

const store = configureStore({
  reducer: {
    projects: projectsReducer,
    projectRows: projectRowsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
