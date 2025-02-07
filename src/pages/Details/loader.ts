import { LoaderFunctionArgs } from 'react-router-dom';
import { type Character, type Info } from 'rickmortyapi';

export interface FetchCharacterResponse {
  results: Character;
  info: Info<Character>;
}
export const loader = async (params: LoaderFunctionArgs<unknown>) => {
  const id = params.params.detailsId;
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  if (!response.ok) {
    const errorData = (await response.json()) as { error: string };
    throw new Error(errorData.error || 'Failed to fetch characters');
  }
  const url = new URL(params.request.url);
  const data: Character = await response.json();
  return { id, data, url };
};
