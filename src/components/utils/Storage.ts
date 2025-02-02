export const setLocalStorage = (name: string, search: string): void => {
  localStorage.setItem(name, search);
};

export const getLocalStorage = (name: string): string => {
  const search = localStorage.getItem(name);
  return search ? search : ' ';
};
