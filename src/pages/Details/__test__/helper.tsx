import { render } from '@testing-library/react';
import { vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Details from '../Details';

vi.mock('react-router-dom', async () => {
  const actual = await import('react-router-dom');

  const mockUseParams = vi.fn(() => ({
    detailsId: '1',
  }));

  return {
    ...actual,
    useParams: mockUseParams,
  };
});

export const setup = () => {
  const utils = render(<Details />, {
    wrapper: ({ children }) => <MemoryRouter>{children}</MemoryRouter>,
  });
  const user = userEvent.setup();
  return {
    ...utils,

    user,
  };
};
