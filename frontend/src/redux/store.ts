import { configureStore } from "@reduxjs/toolkit";
import feature from "./feature";

export const store = configureStore({
  reducer: {
    feature: feature,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
