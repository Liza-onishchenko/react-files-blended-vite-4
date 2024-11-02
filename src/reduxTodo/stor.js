import { configureStore } from '@reduxjs/toolkit';
import { toDosReducer } from './todoSlice';

export const store = configureStore({
  reducer: {
    todos: toDosReducer,
  },
});
