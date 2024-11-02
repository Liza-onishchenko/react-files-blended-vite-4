import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'toDo',
  initialState: {
    items: [],
  },
  reducers: {},
});

export const toDosReducer = todoSlice.reducer;
export const selectToDos = state => state.todos.items;
