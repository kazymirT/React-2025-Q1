import { useRef } from 'react';
import styles from './Search.module.scss';
import { useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { queryParams, setName } from '@/redux/slices/queryParamsSlice';

const Search = () => {
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  const { name: defaultValue } = useAppSelector(queryParams);
  const [, setSearchParams] = useSearchParams();

  const handleSearch = () => {
    if (inputRef.current) {
      const searchName = inputRef.current.value;
      setSearchParams({ name: searchName });
      dispatch(setName(searchName));
    }
  };
  return (
    <header className={styles.header}>
      <div className={styles.search}>
        <input ref={inputRef} defaultValue={defaultValue} type="text" />
        <button onClick={handleSearch} type="button">
          Search
        </button>
      </div>
    </header>
  );
};

export default Search;
