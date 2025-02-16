import { setup } from './helper';

describe('Pagination', () => {
  it('should render correctly with total pages', () => {
    const totalPages = 5;
    const { getByText } = setup(totalPages);

    expect(getByText(`1/${totalPages}`)).toBeInTheDocument();
  });

  it('should update search params when clicking the next button', async () => {
    const totalPages = 5;
    const { mockSetSearchParams, user, getByText } = setup(totalPages);

    const nextButton = getByText('>');
    await user.click(nextButton);

    expect(mockSetSearchParams).toHaveBeenCalledOnce();
  });

  it('should disable the previous button on the first page', () => {
    const totalPages = 5;
    const { getByText } = setup(totalPages);

    const prevButton = getByText('<');
    expect(prevButton).toBeDisabled();
  });

  it('should disable the next button on the last page', () => {
    const totalPages = 1;
    const { getByText } = setup(totalPages);

    const nextButton = getByText('>');
    expect(nextButton).toBeDisabled();
  });
});
