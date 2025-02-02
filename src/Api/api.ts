import { type Character, type Info } from 'rickmortyapi';

export interface FetchCharactersResponse {
  results: Character[];
  info: Info<Character[]>;
}

export const fetchCharactersByName = async (
  name: string
): Promise<FetchCharactersResponse> => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?name=${name}`
  );

  if (!response.ok) {
    const errorData = (await response.json()) as { error: string };
    throw new Error(errorData.error || 'Failed to fetch characters');
  }

  const data: FetchCharactersResponse = await response.json();
  return data;
};
