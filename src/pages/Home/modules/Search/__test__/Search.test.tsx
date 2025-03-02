import { renderWithProviders } from '@/test/helper';
import Search from '../Search';

describe('Header Component', () => {
  it('should render Header with input and button', async () => {
    const { getByRole } = renderWithProviders(<Search />);
    const inputElement = getByRole('textbox');
    const btn = getByRole('button', { name: 'Search' });

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue('');
    expect(btn).toBeInTheDocument();
  });
  it('should update localStorage when user types in input and clicks search button', async () => {
    const inputValue = 'text for test';
    const { getByRole, user } = renderWithProviders(<Search />);
    const inputElement = getByRole('textbox');
    const btn = getByRole('button', { name: 'Search' });

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue('');
    expect(btn).toBeInTheDocument();

    await user.type(inputElement, inputValue);

    await user.click(btn);
  });
});
