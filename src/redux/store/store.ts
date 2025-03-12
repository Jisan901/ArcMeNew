import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../slices/app/counterSlice'
import baseAPI from "./baseAPI";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [baseAPI.reducerPath]: baseAPI.reducer
  },
});

// Infer types for TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
