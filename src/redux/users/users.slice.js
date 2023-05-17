import { createSlice } from '@reduxjs/toolkit';

import { usersInitState } from './users.init-state';
import { fetchUsers, followUser } from './users.operations';
import { STATUS } from '../../constants/status.constants';

const handlePending = state => {
  state.status = STATUS.loading;
};

const handleRejected = (state, action) => {
  state.status = STATUS.error;
  state.error = action.payload;
};

const usersSlice = createSlice({
  name: 'users',
  initialState: usersInitState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(fetchUsers.pending, handlePending)
      .addCase(followUser.pending, handlePending)
      .addCase(fetchUsers.rejected, handleRejected)
      .addCase(followUser.rejected, handleRejected)
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = STATUS.success;
        state.users.push(...action.payload);
      })
      .addCase(followUser.fulfilled, (state, action) => {
        state.status = STATUS.success;
        const idx = state.users.findIndex(
          user => user.id === action.payload.id
        );
        state.users[idx] = action.payload;
      }),
});

export const usersReducer = usersSlice.reducer;
