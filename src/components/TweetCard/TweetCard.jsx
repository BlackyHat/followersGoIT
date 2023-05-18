import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { followUser } from 'redux/users/users.operations';
import { addSubs, removeSubs } from 'redux/subscription/subscription.slice';
import clsx from 'clsx';

import { ReactComponent as Logo } from '../../images/logo_GoIT.svg';
import css from './TweetCard.module.css';

const TweetCard = ({ isFollowing, userInfo }) => {
  console.log(userInfo);
  console.log(typeof userInfo);
  const dispatch = useDispatch();
  let { id, avatar, tweets, followers, user } = userInfo;
  const onFollow = e => {
    if (isFollowing) {
      dispatch(removeSubs(id));
      followers -= 1;
    } else {
      dispatch(addSubs(id));
      followers += 1;
    }

    dispatch(followUser({ ...userInfo, followers }));
  };
  const label = isFollowing ? 'FOLLOWING' : 'FOLLOW';

  return (
    <div className={css.cardBox}>
      <Logo className={css.logo} />
      <span className={css.border}></span>
      <img className={css.avatar} src={avatar} alt={user} />
      <div className={css.labelInner}>
        <span className={css.cardLabel}>
          {tweets.toLocaleString('en-IN')} TWEETS
        </span>
        <span className={css.cardLabel}>
          {followers.toLocaleString('en-IN')} FOLLOWER
        </span>
      </div>
      <button
        className={clsx(css.button, isFollowing && css.buttonActive)}
        onClick={onFollow}
      >
        {label}
      </button>
    </div>
  );
};

export default TweetCard;

TweetCard.propTypes = {
  userInfo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    tweets: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    user: PropTypes.string.isRequired,
  }),
  isFollowing: PropTypes.bool,
};
