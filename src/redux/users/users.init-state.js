import { STATUS } from '../../constants';

export const usersInitState = {
  users: [],
  filter: 'show all',
  loadedPages: 0,
  status: STATUS.idle,
};
