import { cleanup } from '@testing-library/react';
import { renderWithProviders } from '@/test/helper';
import Card from '../Card';
import { MOCK_DATA } from '@/components/CardList/__test__/helper';
import { CARD_TEST_ID } from '../constants';

describe('Card Component', async () => {
  afterEach(() => {
    cleanup();
  });
  it('should render a card with correct data', () => {
    const { name, status, gender, created, image, id } = MOCK_DATA[0];
    const { getByText, getByAltText, getByTestId } = renderWithProviders(
      <Card data={MOCK_DATA[0]} />
    );
    const link = getByTestId(CARD_TEST_ID);
    const img = getByAltText(`Image of ${name}`);

    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', image);

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', `/details/${id}/`);
    expect(getByText(name)).toBeInTheDocument();
    expect(getByText(status)).toBeInTheDocument();
    expect(getByText(gender)).toBeInTheDocument();
    expect(getByText(created)).toBeInTheDocument();
  });
});
