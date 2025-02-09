import { cleanup } from '@testing-library/react';
import { renderWithProviders } from '@/test/helper';
import Footer from '../Footer';

describe('Footer', () => {
  afterEach(() => {
    cleanup();
  });
  it('should render footer with error button', async () => {
    const { getByRole, getByText, user } = renderWithProviders(<Footer />);

    const errorBtn = getByRole('button', { name: 'Error' });
    expect(errorBtn).toBeInTheDocument();

    await user.click(errorBtn);

    expect(getByText('An error occurred')).toBeInTheDocument();
    expect(getByRole('button', { name: 'Please restore operation.' }));
  });
});
