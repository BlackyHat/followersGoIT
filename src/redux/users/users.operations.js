import { createAsyncThunk } from '@reduxjs/toolkit';
import { tweetsApi } from 'services/tweetsApi';

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (page = 1, thunkAPI) => {
    try {
      const { data } = await tweetsApi.get(`users`, {
        params: {
          page,
          limit: page * 3,
        },
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const followUser = createAsyncThunk(
  'users/followUser',
  async (user, thunkAPI) => {
    try {
      const { data } = await tweetsApi.put(`users/${user.id}`, user);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
