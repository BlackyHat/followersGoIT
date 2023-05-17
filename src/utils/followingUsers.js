import { tweetsApi } from '../services/tweetsApi';

const followUser = async userId => {
  console.log('userId', userId);
  const { data } = await tweetsApi.post(`mySubscriptions`, userId);
  console.log(data);
};
const unFollowUser = async id => {
  const { data } = await tweetsApi.delete(`mySubscriptions/${id}`);
  console.log(data);
};

export { unFollowUser, followUser };
