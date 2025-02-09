import { useState } from 'react';

export const useLocalStorage = () => {
  const [searchValue, setSearchValue] = useState<string>(
    localStorage.getItem('search') || ''
  );
  const setLocalStorage = (key: string, newValue: string) => {
    setSearchValue(newValue);
    localStorage.setItem(key, newValue);
  };
  return { searchValue, setLocalStorage };
};
