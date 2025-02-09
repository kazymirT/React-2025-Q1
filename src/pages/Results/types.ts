import { Character } from 'rickmortyapi';

export interface FetchCharactersResponse {
  results: Character[];
  info?: {
    count: number;
    next: null | string;
    pages: number;
    prev: null | string;
  };
}
