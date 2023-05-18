import { useSelector } from 'react-redux';
import { selectUsersBySubs } from 'redux/users/users.selectors';
import { selectSubs } from 'redux/subscription/subscription.selectors';

import TweetCard from 'components/TweetCard/TweetCard';
import css from './TweetsList.module.css';

const TweetsList = () => {
  const subs = useSelector(selectSubs);
  const users = useSelector(selectUsersBySubs);
  const checkIsFollowing = (subs, id) => {
    return subs.includes(id);
  };

  return (
    <ul className={css.tweetsContainer}>
      {users &&
        users.map(user => {
          const isFollowing = checkIsFollowing(subs, user.id);
          return (
            <li key={user.id}>
              <TweetCard isFollowing={isFollowing} userInfo={user} />
            </li>
          );
        })}
    </ul>
  );
};

export default TweetsList;
