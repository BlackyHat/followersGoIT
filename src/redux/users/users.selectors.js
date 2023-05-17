import { createSelector } from '@reduxjs/toolkit';
import { selectSubs } from 'redux/subscription/subscription.selectors';

export const selectUsers = state => state.users.users;

export const selectUsersBySubs = filter =>
  createSelector([selectUsers, selectSubs], (users, subscription) => {
    switch (filter) {
      case 'follow':
        return users.filter(({ id }) => subscription.includes(id));
      case 'followings':
        return users.filter(({ id }) => !subscription.includes(id));
      default:
        return users;
    }
  });
