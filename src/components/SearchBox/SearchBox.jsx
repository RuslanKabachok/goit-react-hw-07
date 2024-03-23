import { useDispatch, useSelector } from 'react-redux';
import { useId } from 'react';
import { changeFilter } from '../../redux/filtersSlice';
import { selectNameFilter } from '../../redux/filtersSlice';
import css from '../SearchBox/SearchBox.module.css';

function SearchBox() {
  const searchId = useId();
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  return (
    <form className={css.form}>
      <p className={css.text}>Find contacts by name</p>
      <input
        type="text"
        name="searchQuery"
        id={searchId}
        className={css.search}
        value={filter}
        onChange={(e) => {
          dispatch(changeFilter(e.target.value));
        }}
      />
    </form>
  );
}

export default SearchBox;
