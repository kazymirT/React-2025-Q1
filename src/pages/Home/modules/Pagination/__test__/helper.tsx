import { vi } from 'vitest';
import { Pagination } from '../Pagination';
import { renderWithProviders } from '@/test/helper';

const mockSearchParams = new URLSearchParams({ page: '1' });
const mockSetSearchParams = vi.fn((updateFn) => {
  if (typeof updateFn === 'function') {
    const newParams = updateFn(mockSearchParams);
    mockSearchParams.forEach((_, key) => mockSearchParams.delete(key));
    newParams.forEach((value: string, key: string) =>
      mockSearchParams.set(key, value)
    );
  }
});
const mockGetSearchParams = vi.fn(() => mockSearchParams);
vi.mock(import('react-router-dom'), async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    useSearchParams: () => [mockGetSearchParams(), mockSetSearchParams],
  };
});

export const setup = (totalPages: number) => {
  const utils = renderWithProviders(<Pagination totalPages={totalPages} />);
  return {
    ...utils,
    mockSetSearchParams,
    mockGetSearchParams,
    mockSearchParams,
  };
};
