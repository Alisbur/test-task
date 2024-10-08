"use client";

import { configureStore } from "@reduxjs/toolkit";
// import { testPhaseReducer } from "./slices/test-phase-slice";
// import { questionsReducer } from "./slices/questions-slice"; 
// import { progressReducer } from "./slices/progress-slice";
import { testReducer } from "./slices/test-slice";
import { loadState, saveState } from "../shared/helpers/browser-storage";

export const store = configureStore({
  reducer: {
    test: testReducer,
    // testPhase: testPhaseReducer,
    // questions: questionsReducer,
    // progress: progressReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  preloadedState: loadState(),
});

store.subscribe(()=>saveState(store.getState()));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;