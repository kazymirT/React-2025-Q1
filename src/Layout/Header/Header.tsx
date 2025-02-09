import { useRef } from 'react';
import styles from './Header.module.scss';
import { useSearchParams } from 'react-router-dom';
import { useLocalStorage } from '../../hooks/useLocalStorage';

const Header = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const { setLocalStorage } = useLocalStorage();

  const handleSearch = () => {
    if (inputRef.current) {
      const searchName = inputRef.current.value;
      setSearchParams({ name: searchName });
      setLocalStorage('search', searchName);
    }
  };
  const defaultValue = searchParams.get('name') || '';
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

export default Header;
