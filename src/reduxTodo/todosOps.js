import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://637785ab81a568fc2518138f.mockapi.io/';

export const addToDo = createAsyncThunk(
  'todo/addToDo',
  async (newTodo, thunkAPI) => {
    try {
      const response = await axios.post('/todos', newTodo);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const fetchToDos = createAsyncThunk(
  'todos/fetchToDos',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/todos');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);
export const deleteToDos = createAsyncThunk(
  'todos/deleteToDos',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/todos/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);
