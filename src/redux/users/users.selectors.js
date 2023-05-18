import { createSelector } from '@reduxjs/toolkit';
import { FILTER } from 'constants/filter.constants';
import { selectSubs } from 'redux/subscription/subscription.selectors';

export const selectUsers = state => state.users.users;
export const selectStatus = state => state.users.status;
export const selectFilter = state => state.users.filter;
export const selectPage = state => state.users.page;

export const selectUsersBySubs = createSelector(
  [selectUsers, selectSubs, selectFilter],
  (users, subs, filter) => {
    switch (filter) {
      case FILTER.follow:
        return users.filter(({ id }) => subs.includes(id));
      case FILTER.followings:
        return users.filter(({ id }) => !subs.includes(id));
      default:
        return users;
    }
  }
);
