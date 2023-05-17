import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from 'redux/users/users.operations';
import { selectUsersBySubs } from 'redux/users/users.selectors';
import { selectSubs } from 'redux/subscription/subscription.selectors';

import TweetsList from 'components/TweetsList/TweetsList';
import FilterTweets from 'components/FilterTweets/FilterTweets';
import css from './TweetsPage.module.css';
import { BiLeftArrowCircle } from 'react-icons/bi';

const TweetsPage = () => {
  const dispatch = useDispatch();
  const subs = useSelector(selectSubs);
  const [filter, setFilter] = useState('show all');
  const users = useSelector(selectUsersBySubs(filter));
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchUsers(page));
  }, [dispatch, page]);

  const loadMore = () => {
    setPage(page => page + 1);
  };

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  return (
    <section className={css.section}>
      <div className={css.inner}>
        <Link className={css.link} to={backLinkHref}>
          <BiLeftArrowCircle className={css.linkIcon} />
          Back to HomePage
        </Link>
        <FilterTweets onFilter={setFilter} filter={filter} />
      </div>
      <TweetsList subs={subs} users={users} />
      <button className={css.button} onClick={loadMore}>
        Load More...
      </button>
    </section>
  );
};

export default TweetsPage;
