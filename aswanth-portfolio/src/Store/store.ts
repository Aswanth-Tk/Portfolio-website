import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Components/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// Types for use in the app
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
