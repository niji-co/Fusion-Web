import { configureStore } from "@reduxjs/toolkit";

import { projectsReducer } from "../pages/Project";

const store = configureStore({
  reducer: {
    projects: projectsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
