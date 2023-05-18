import css from './FilterTweets.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/users/users.slice';
import { selectFilter } from 'redux/users/users.selectors';
import { FILTER } from 'constants';

const FilterTweets = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleOptionChange = option => {
    dispatch(setFilter(option));
  };

  return (
    <div className={css.dropdown}>
      <button className={css.dropdownToggle} type="button">
        {filter}
      </button>
      <ul className={css.dropdownMenu}>
        <li
          className={css.dropdownItem}
          onClick={() => handleOptionChange(FILTER.showAll)}
        >
          show all
        </li>
        <li
          className={css.dropdownItem}
          onClick={() => handleOptionChange(FILTER.follow)}
        >
          follow
        </li>
        <li
          className={css.dropdownItem}
          onClick={() => handleOptionChange(FILTER.followings)}
        >
          followings
        </li>
      </ul>
    </div>
  );
};

export default FilterTweets;
