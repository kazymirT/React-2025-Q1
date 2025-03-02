import { cleanup } from '@testing-library/react';
import { renderWithProviders } from '@/test/helper';
import Card from '../Card';
import { MOCK_DATA } from '@/pages/Home/modules/CardList/__test__/helper';
import { CARD_TEST_ID } from '../constants';

describe('Card Component', async () => {
  afterEach(() => {
    cleanup();
  });
  it('should render a card with correct data', () => {
    const { name, status, gender, image } = MOCK_DATA[0];
    const { getByText, getByAltText, getByTestId } = renderWithProviders(
      <Card data={MOCK_DATA[0]} />
    );
    const link = getByTestId(CARD_TEST_ID);
    const img = getByAltText(`Image of ${name}`);

    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', image);

    expect(link).toBeInTheDocument();
    expect(getByText(name)).toBeInTheDocument();
    expect(getByText(status)).toBeInTheDocument();
    expect(getByText(gender)).toBeInTheDocument();
  });
  it('should toggle checkbox state and update store correctly', async () => {
    const { id } = MOCK_DATA[0];
    const { getByRole, store, user } = renderWithProviders(
      <Card data={MOCK_DATA[0]} />,
      {
        preloadedState: {
          selectedItems: { selectedItemsId: [], selectedItems: [] },
        },
      }
    );
    const checkbox = getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();

    await user.click(checkbox);

    expect(checkbox).toBeChecked();
    expect(store.getState().selectedItems.selectedItemsId).toHaveLength(1);
    expect(store.getState().selectedItems.selectedItemsId[0]).toBe(id);

    await user.click(checkbox);
    expect(checkbox).not.toBeChecked();
    expect(store.getState().selectedItems.selectedItemsId).toHaveLength(0);
  });
});
