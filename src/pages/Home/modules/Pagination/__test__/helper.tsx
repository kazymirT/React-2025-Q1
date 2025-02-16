import { vi } from 'vitest';
import { Pagination } from '../Pagination';
import { renderWithProviders } from '@/test/helper';

const mockSetSearchParams = vi.fn();
const mockGetSearchParams = vi.fn(() => new URLSearchParams({ page: '1' }));

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
  };
};
