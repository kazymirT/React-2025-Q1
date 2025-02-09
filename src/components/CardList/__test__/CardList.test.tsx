import { cleanup } from '@testing-library/react';
import CardList from '../CardList';
import { DEFAULT_ERROR_MESSAGE } from '@/components/NoResult/constants';
import { renderWithProviders } from '@/test/helper';
import { MOCK_DATA } from './helper';

describe('CardList Component', async () => {
  afterEach(() => {
    cleanup();
  });
  it('should render a message when there are no items', () => {
    const { getByText } = renderWithProviders(<CardList />);
    expect(getByText(DEFAULT_ERROR_MESSAGE)).toBeInTheDocument();
  });
  it('should render a list of 4 cards when data is provided', () => {
    const { queryByText, getAllByText } = renderWithProviders(
      <CardList data={MOCK_DATA} />
    );
    expect(queryByText(DEFAULT_ERROR_MESSAGE)).not.toBeInTheDocument();

    const items = getAllByText(MOCK_DATA[0].name);
    expect(items).toHaveLength(4);
  });
});
