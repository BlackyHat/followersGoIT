import { tweetsApi } from '../services/tweetsApi';

const getSubscribtion = async params => {
  const { data } = await tweetsApi.get('mySubscriptions');
  console.log('mySubscriptions', data);
  return data;
};

export default getSubscribtion;
