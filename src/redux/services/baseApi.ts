import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseURLApi = 'https://rickandmortyapi.com/api/';

const baseQuery = fetchBaseQuery({
  baseUrl: baseURLApi,

  prepareHeaders: (headers) => {
    headers.set('Content-Type', 'application/json');
    return headers;
  },
});

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery,
  endpoints: () => ({}),
});
