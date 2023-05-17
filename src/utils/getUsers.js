import { tweetsApi } from '../services/tweetsApi';

const getUsers = async params => {
  const { data } = await tweetsApi.get('users', { ...params });
  console.log(data);
  return data;
};

export default getUsers;
