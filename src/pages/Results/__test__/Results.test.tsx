import { renderWithProviders } from '@/test/helper';
import Results from '../Results';
import { waitFor } from '@testing-library/dom';
import { CARD_TEST_ID } from '@/components/Card/constants';
import { LOADER_TEST_ID } from '@/components/Loader/constants';

describe('Results Component', () => {
  it('should display a loader initially and then hide it after data is loaded', async () => {
    const { getByTestId, queryByTestId } = renderWithProviders(<Results />);

    expect(getByTestId(LOADER_TEST_ID)).toBeInTheDocument();

    await waitFor(
      () => {
        expect(queryByTestId(LOADER_TEST_ID)).not.toBeInTheDocument();
      },
      { timeout: 2100 }
    );
  });
  it('should render the search results with the correct number of cards after data is loaded', async () => {
    const { getByText, getAllByTestId } = renderWithProviders(<Results />);

    expect(getByText('Search results.')).toBeInTheDocument();
    await waitFor(
      () => {
        const items = getAllByTestId(CARD_TEST_ID);
        expect(items).toHaveLength(3);
      },
      { timeout: 3000 }
    );
  });
});
