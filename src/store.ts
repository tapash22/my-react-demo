// src/app/store.ts
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../src/features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    // Add other reducers here as your app grows
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
