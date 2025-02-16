import { server } from '@/test/mock/server';
import '@testing-library/jest-dom/vitest';
import nodeFetch, { Request, Response } from 'node-fetch';

Object.assign(global, { fetch: nodeFetch, Request, Response });
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
