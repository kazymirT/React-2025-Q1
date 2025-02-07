import { type Character } from 'rickmortyapi';

export type MainProps = {
  searchName: string | null;
};

export type MainState = {
  status: 'idle' | 'loading' | 'success' | 'error';
  data: Character[] | null;
  error: string | null;
};
