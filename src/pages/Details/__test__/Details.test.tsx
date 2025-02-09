import { waitFor } from '@testing-library/dom';
import { LOADER_TEST_ID } from '@/components/Loader/constants';
import { cleanup } from '@testing-library/react';
import { MOCK_DATA_ID } from '@/test/mock/mockData';
import { setup } from './helper';

describe('Details Page', () => {
  afterEach(() => {
    cleanup();
  });
  it('should render the page with loaders initially and then hide them after data is loaded', async () => {
    const { queryByTestId, getByText } = setup();

    expect(getByText('Details Page')).toBeInTheDocument();
    expect(queryByTestId(LOADER_TEST_ID)).toBeInTheDocument();

    await waitFor(
      () => {
        expect(queryByTestId(LOADER_TEST_ID)).not.toBeInTheDocument();
      },
      { timeout: 3000 }
    );
  });
  it('should render the mock data name twice after data is loaded', async () => {
    const { getAllByText } = setup();
    await waitFor(
      () => {
        expect(getAllByText(MOCK_DATA_ID.name)).toHaveLength(2);
      },
      { timeout: 3000 }
    );
  });
});
