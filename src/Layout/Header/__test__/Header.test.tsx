import { renderWithProviders } from '@/test/helper';
import Header from '../Header';
import { cleanup } from '@testing-library/react';

describe('Header Component', () => {
  afterEach(() => {
    cleanup();
  });
  beforeEach(() => {
    localStorage.clear();
  });
  it('should render Header with logo and button', async () => {
    const { getByText, getByRole } = renderWithProviders(<Header />);

    expect(getByText('Rick and Morty')).toBeInTheDocument();
    expect(getByRole('button', { name: 'Light' })).toBeInTheDocument();
  });
  it('should render button for change theme', async () => {
    const { getByRole, queryByRole, user } = renderWithProviders(<Header />);

    expect(getByRole('button', { name: 'Light' })).toBeInTheDocument();
    await user.click(getByRole('button', { name: 'Light' }));

    expect(queryByRole('button', { name: 'Dark' })).toBeInTheDocument();
    expect(localStorage.getItem('theme')).toBe('light');

    await user.click(getByRole('button', { name: 'Dark' }));

    expect(queryByRole('button', { name: 'Light' })).toBeInTheDocument();
    expect(localStorage.getItem('theme')).toBe('dark');
  });

  it('should load theme from localStorage', async () => {
    localStorage.setItem('theme', 'light');

    const { getByRole } = renderWithProviders(<Header />);

    expect(getByRole('button', { name: 'Dark' })).toBeInTheDocument();
  });
});
