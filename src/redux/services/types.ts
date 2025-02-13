import { Character } from 'rickmortyapi';

export interface AllCharactersFetchArgs {
  name: string | null;
  page: number | null;
}

export interface CharactersResponse {
  results: Character[];
  info?: {
    count: number;
    next: null | string;
    pages: number;
    prev: null | string;
  };
}
