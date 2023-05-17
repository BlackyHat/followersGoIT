import PropTypes from 'prop-types';
import css from './TweetsList.module.css';
import TweetCard from 'components/TweetCard/TweetCard';

const TweetsList = ({ subs, users }) => {
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

TweetsList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      tweets: PropTypes.number.isRequired,
      followers: PropTypes.number.isRequired,
      user: PropTypes.string.isRequired,
    })
  ),
  subs: PropTypes.array.isRequired,
};
