import { cleanup } from '@testing-library/react';
import { renderWithProviders } from '@/test/helper';
import ErrorPage from '../ErrorPage';
import { ERROR_PAGE_MASSAGE } from '../constants';

describe('ErrorPage', () => {
  afterEach(() => {
    cleanup();
  });
  it('should render the Error page', async () => {
    const { getByRole, getByText } = renderWithProviders(<ErrorPage />);

    const errorBtn = getByRole('button', { name: 'Reload Page' });
    expect(errorBtn).toBeInTheDocument();
    expect(getByText(ERROR_PAGE_MASSAGE)).toBeInTheDocument();
  });
});
