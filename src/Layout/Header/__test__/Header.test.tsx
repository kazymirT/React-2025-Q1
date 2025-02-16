import { renderWithProviders } from '@/test/helper';
import Header from '../Header';

describe('Header Component', () => {
  it('should render Header with logo and button', async () => {
    const { getByText, getByRole } = renderWithProviders(<Header />);

    expect(getByText('Rick and Morty')).toBeInTheDocument();
    expect(getByRole('button', { name: 'Light' })).toBeInTheDocument();
  });
  it('should render Header with logo and button', async () => {
    const { getByRole, queryByRole, user } = renderWithProviders(<Header />);

    expect(getByRole('button', { name: 'Light' })).toBeInTheDocument();
    await user.click(getByRole('button', { name: 'Light' }));

    expect(queryByRole('button', { name: 'Dark' })).toBeInTheDocument();
  });
});
