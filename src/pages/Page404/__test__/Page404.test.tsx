import { cleanup } from '@testing-library/react';
import { renderWithProviders } from '@/test/helper';
import Page404 from '../Page404';

describe('404 Page', () => {
  afterEach(() => {
    cleanup();
  });
  it('should render the 404 page', async () => {
    const { getByRole, getByText } = renderWithProviders(<Page404 />);
    expect(getByText('404')).toBeInTheDocument();
    expect(getByText('Page not found')).toBeInTheDocument();
    expect(getByRole('button', { name: 'Go to main page' }));
  });
});
