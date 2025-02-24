import { delay, http, HttpResponse } from 'msw';
import { MOCK_DATA_ID, MOCK_DATA_LIST } from './mockData';

const baseURLApi = import.meta.env.VITE_API_BASE_URL;

export const handlers = [
  http.get(`${baseURLApi}/character/?page=1&name=`, async () => {
    await delay(2000);
    return HttpResponse.json(MOCK_DATA_LIST);
  }),
  http.get(`${baseURLApi}/character/1`, async () => {
    await delay(2000);
    return HttpResponse.json(MOCK_DATA_ID);
  }),
];
