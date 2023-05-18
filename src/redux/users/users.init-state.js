import { STATUS } from '../../constants/status.constants';

export const usersInitState = {
  users: [],
  filter: 'show all',
  page: 1,
  status: STATUS.idle,
};
