import { type FC, useRef } from 'react';
import styles from './Header.module.scss';
import { type HeaderProps } from './types';

const Header: FC<HeaderProps> = ({ onClick, searchValue }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    if (inputRef.current) {
      onClick(inputRef.current.value);
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.search}>
        <input ref={inputRef} defaultValue={searchValue} type="text" />
        <button onClick={handleSearch} type="button">
          Search
        </button>
      </div>
    </header>
  );
};

export default Header;
