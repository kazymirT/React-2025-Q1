import { cleanup, render } from '@testing-library/react';
import { renderWithProviders } from '@/test/helper';
import ErrorPage from '../ErrorPage';
import { ERROR_PAGE_MASSAGE } from '../constants';
import userEvent from '@testing-library/user-event';

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
  it('should reload the page when the button is clicked', async () => {
    const user = userEvent.setup();

    const reloadMock = vi.fn();
    vi.stubGlobal('location', { ...window.location, reload: reloadMock });

    const { getByText } = render(<ErrorPage />);

    const button = getByText('Reload Page');
    await user.click(button);

    expect(reloadMock).toHaveBeenCalledTimes(1);

    vi.unstubAllGlobals();
  });
});
