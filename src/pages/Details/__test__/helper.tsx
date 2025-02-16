import { vi } from 'vitest';
import Details from '../Details';
import { renderWithProviders } from '@/test/helper';

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
  const utils = renderWithProviders(<Details />);
  return {
    ...utils,
  };
};
