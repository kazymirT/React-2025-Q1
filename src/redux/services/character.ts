import { Character } from 'rickmortyapi';
import { baseApi } from './baseApi';
import type { AllCharactersFetchArgs, CharactersResponse } from './types';

export const characterApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCharacterById: builder.query<Character, string>({
      query: (id) => ({
        url: `/character/${id}`,
      }),
    }),
    getAllCharacters: builder.query<CharactersResponse, AllCharactersFetchArgs>(
      {
        query: ({ name, page }) => ({
          url: `/character/?page=${page}&name=${name}`,
        }),
      }
    ),
  }),
  overrideExisting: false,
});

export const { useGetCharacterByIdQuery, useGetAllCharactersQuery } =
  characterApi;
