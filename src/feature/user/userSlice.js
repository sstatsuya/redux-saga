import {createSlice} from '@reduxjs/toolkit';
import {call} from 'redux-saga/effects';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoading: false,
    userList: [],
    isError: false,
  },
  reducers: {
    getUserListRequest: (state, action) => {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    },
    getUserListSuccess: (state, action) => {
      return {
        ...state,
        isLoading: false,
        isError: false,
        userList: action.payload,
      };
    },
    getUserListError: (state, action) => {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    },
  },
});
