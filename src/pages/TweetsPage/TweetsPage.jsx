import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from 'redux/users/users.operations';

import TweetsList from 'components/TweetsList/TweetsList';
import FilterTweets from 'components/FilterTweets/FilterTweets';
import css from './TweetsPage.module.css';
import { BiLeftArrowCircle } from 'react-icons/bi';
import { selectPage, selectStatus } from 'redux/users/users.selectors';
import { setPage } from 'redux/users/users.slice';
import { STATUS } from 'constants/status.constants';
import Loading from 'components/Loading/Loading';

const TweetsPage = () => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const status = useSelector(selectStatus);

  useEffect(() => {
    dispatch(fetchUsers(page));
  }, [dispatch, page]);

  const loadMore = () => {
    dispatch(setPage(page + 1));
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
        <FilterTweets />
      </div>
      <TweetsList />
      {status === STATUS.loading ? (
        <Loading />
      ) : (
        <button className={css.button} onClick={loadMore}>
          Load More...
        </button>
      )}
    </section>
  );
};

export default TweetsPage;
