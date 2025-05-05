import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todoSlice";

const store = configureStore({
  reducer: {
    // Add your reducers here
    todos: todoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export { store };
