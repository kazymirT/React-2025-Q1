import { render } from '@testing-library/react';
import { vi } from 'vitest';
import { Pagination } from '../Pagination';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

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
  const utils = render(<Pagination totalPages={totalPages} />, {
    wrapper: ({ children }) => <MemoryRouter>{children}</MemoryRouter>,
  });
  const user = userEvent.setup();
  return {
    ...utils,
    mockSetSearchParams,
    mockGetSearchParams,
    user,
  };
};
