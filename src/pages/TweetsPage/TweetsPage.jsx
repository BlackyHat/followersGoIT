import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from 'redux/users/users.operations';

import TweetsList from 'components/TweetsList/TweetsList';
import FilterTweets from 'components/FilterTweets/FilterTweets';
import css from './TweetsPage.module.css';
import { BiLeftArrowCircle } from 'react-icons/bi';
import { selectLoadedPages, selectStatus } from 'redux/users/users.selectors';
import { STATUS } from 'constants';
import Loading from 'components/Loading/Loading';

const TweetsPage = () => {
  const dispatch = useDispatch();
  const loadedPages = useSelector(selectLoadedPages);
  const status = useSelector(selectStatus);
  const [page, SetPage] = useState(1);

  useEffect(() => {
    if (loadedPages < page) {
      dispatch(fetchUsers(page));
    }
  }, [dispatch, page, loadedPages]);

  const loadMore = () => {
    SetPage(page => page + 1);
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
