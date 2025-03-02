import { renderWithProviders } from '@/test/helper';
import Results from '../Results';
import { waitFor } from '@testing-library/dom';
import { LOADER_TEST_ID } from '@/components/Loader/constants';
import { CARD_TEST_ID } from '../../Card/constants';
import { cleanup } from '@testing-library/react';

describe('Results Component', () => {
  afterEach(() => {
    cleanup();
  });
  it('should display a loader initially and then hide it after data is loaded', async () => {
    const { getByTestId, queryByTestId } = renderWithProviders(<Results />);

    expect(getByTestId(LOADER_TEST_ID)).toBeInTheDocument();

    await waitFor(
      () => {
        expect(queryByTestId(LOADER_TEST_ID)).not.toBeInTheDocument();
      },
      { timeout: 2500 }
    );
  });
  it('should render the search results with the correct number of cards after data is loaded', async () => {
    const { getByText, getAllByTestId } = renderWithProviders(<Results />, {
      preloadedState: {
        queryParams: { name: '', page: 1 },
      },
    });

    expect(getByText('Search results.')).toBeInTheDocument();
    await waitFor(
      () => {
        const items = getAllByTestId(CARD_TEST_ID);
        expect(items).toHaveLength(3);
      },
      { timeout: 4000 }
    );
  });
});
