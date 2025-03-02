import { Character } from 'rickmortyapi';
import { baseApi } from './baseApi';
import type { AllCharactersFetchArgs, CharactersResponse } from './types';
import { setCharacters, setDetails } from '../slices/charactersSlice';

export const characterApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCharacterById: builder.query<Character, string>({
      query: (id) => ({
        url: `/character/${id}`,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setDetails(data));
        } catch (error) {
          console.error(error);
        }
      },
    }),
    getAllCharacters: builder.query<CharactersResponse, AllCharactersFetchArgs>(
      {
        query: ({ name, page }) => ({
          url: `/character/?page=${page}&name=${name}`,
        }),
        async onQueryStarted(_, { dispatch, queryFulfilled }) {
          try {
            const { data } = await queryFulfilled;
            dispatch(setCharacters(data.results));
          } catch (error) {
            console.error(error);
          }
        },
      }
    ),
  }),
  overrideExisting: false,
});

export const { useGetCharacterByIdQuery, useGetAllCharactersQuery } =
  characterApi;
