import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

import { subscriptionInitState } from './subscription.init-state';

const subscriptionSlice = createSlice({
  name: 'subscription',
  initialState: subscriptionInitState,
  reducers: {
    addSubs: (state, action) => {
      state.subscription.push(action.payload);
    },
    removeSubs: (state, action) => {
      const idx = state.subscription.findIndex(subs => subs === action.payload);
      state.subscription.splice(idx, 1);
    },
  },
});

export const { addSubs, removeSubs } = subscriptionSlice.actions;

const persistConfig = {
  key: 'subscription',
  storage,
};

export const subscriptionReducer = persistReducer(
  persistConfig,
  subscriptionSlice.reducer
);
