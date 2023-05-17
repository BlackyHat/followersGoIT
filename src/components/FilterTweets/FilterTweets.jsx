import PropTypes from 'prop-types';
import css from './FilterTweets.module.css';

const FilterTweets = ({ onFilter, filter }) => {
  const handleOptionChange = option => {
    onFilter && onFilter(option);
  };

  return (
    <div className={css.dropdown}>
      <button className={css.dropdownToggle} type="button">
        {filter}
      </button>
      <ul className={css.dropdownMenu}>
        <li
          className={css.dropdownItem}
          onClick={() => handleOptionChange('show all')}
        >
          show all
        </li>
        <li
          className={css.dropdownItem}
          onClick={() => handleOptionChange('follow')}
        >
          follow
        </li>
        <li
          className={css.dropdownItem}
          onClick={() => handleOptionChange('followings')}
        >
          followings
        </li>
      </ul>
    </div>
  );
};

export default FilterTweets;

FilterTweets.propTypes = {
  onFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
