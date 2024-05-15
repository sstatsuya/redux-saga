import {createSlice} from '@reduxjs/toolkit';
import {call} from 'redux-saga/effects';

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    isLoading: false,
    todoList: [],
    isError: false,
  },
  reducers: {
    getTodoListRequest: (state, action) => {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    },
    getTodoListSuccess: (state, action) => {
      return {
        ...state,
        isLoading: false,
        isError: false,
        todoList: action.payload,
      };
    },
    getTodoListError: (state, action) => {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    },
  },
});
