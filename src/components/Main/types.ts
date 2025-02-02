import { Character } from 'rickmortyapi';

export type MainProps = {
  data: string | null;
};

export type MainState = {
  status: 'idle' | 'loading' | 'success' | 'error';
  data: Character[] | null;
  error: string | null;
};
