import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../src/features/counter/counterSlice";
import usersReducer from "../src/features/users/usersSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: usersReducer,
    // Add other reducers here as your app grows
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
