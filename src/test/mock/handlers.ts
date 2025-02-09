import { delay, http, HttpResponse } from 'msw';
import { MOCK_DATA_ID, MOCK_DATA_LIST } from './mockData';

export const handlers = [
  http.get(
    'https://rickandmortyapi.com/api/character/?page=1&name=',
    async () => {
      await delay(2000);
      return HttpResponse.json(MOCK_DATA_LIST);
    }
  ),
  http.get('https://rickandmortyapi.com/api/character/1', async () => {
    await delay(2000);
    return HttpResponse.json(MOCK_DATA_ID);
  }),
];
