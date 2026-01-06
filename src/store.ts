import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../src/features/counter/counterSlice";
import usersReducer from "../src/features/users/usersSlice";
import { usersApi } from "./features/advance_redux_uses/demoAdvanceSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: usersReducer,
    [usersApi.reducerPath]: usersApi.reducer,
    // Add other reducers here as your app grows
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
