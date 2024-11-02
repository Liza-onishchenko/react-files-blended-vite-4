import { createSlice } from '@reduxjs/toolkit';
import { addToDo, deleteToDos, fetchToDos } from './todosOps';

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(addToDo.pending, state => {
        state.isLoading = true;
      })
      .addCase(addToDo.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addToDo.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchToDos.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchToDos.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchToDos.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteToDos.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteToDos.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload.id);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteToDos.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const toDosReducer = todoSlice.reducer;
export const selectToDos = state => state.todos.items;
export const selectIsLoading = state => state.todos.isLoading;
