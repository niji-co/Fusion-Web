import { configureStore } from "@reduxjs/toolkit";

import projectsReducer from "reducers/Project";
import projectRowsReducer from "reducers/ProjectRow";

const store = configureStore({
  reducer: {
    projects: projectsReducer,
    projectRows: projectRowsReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
