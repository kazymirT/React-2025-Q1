import { waitFor } from '@testing-library/dom';
import { CARD_TEST_ID } from '@/components/Card/constants';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { cleanup, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Details from '@/pages/Details/Details';
import Home from '@/pages/Home/Home';
import { LOADER_TEST_ID } from '@/components/Loader/constants';

describe('Home Page', () => {
  afterEach(() => {
    cleanup();
  });
  it('should navigate to details page on card click', async () => {
    const user = userEvent.setup();
    const {
      getAllByTestId,
      getByTestId,
      queryByTestId,
      getByText,
      getByRole,
      queryByText,
    } = render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/details/:detailsId" element={<Details />} />
          </Route>
        </Routes>
      </MemoryRouter>
    );
    await waitFor(
      () => {
        expect(queryByTestId(LOADER_TEST_ID)).not.toBeInTheDocument();
      },
      { timeout: 3000 }
    );

    await user.click(getAllByTestId(CARD_TEST_ID)[0]);
    expect(getByTestId(LOADER_TEST_ID)).toBeInTheDocument();

    await waitFor(() => {
      expect(getByText('Details Page')).toBeInTheDocument();
    });
    const cancelBtn = getByRole('button', { name: 'Cancel' });
    await user.click(cancelBtn);

    expect(queryByText('Details Page')).not.toBeInTheDocument();
  });
});
