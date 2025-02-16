import { Route, Routes } from 'react-router-dom';
import { cleanup } from '@testing-library/react';
import Details from '@/pages/Details/Details';
import Home from '@/pages/Home/Home';
import { renderWithProviders } from '@/test/helper';
import Layout from '../Layout';
import ErrorPage from '@/pages/ErrorPage/ErrorPage';
import Page404 from '@/pages/Page404/Page404';
import { LAYOUT_TEST_ID } from '../constants';

describe('Home Page', () => {
  afterEach(() => {
    cleanup();
  });
  it('should navigate to details page on card click', async () => {
    const { getByTestId } = renderWithProviders(
      <Routes>
        <Route element={<Layout />} errorElement={<ErrorPage />}>
          <Route path="/" element={<Home />}>
            <Route path="/details/:detailsId" element={<Details />} />
          </Route>
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    );

    const wrapper = getByTestId(LAYOUT_TEST_ID);
    expect(wrapper).toBeInTheDocument();
    expect(wrapper).toHaveClass('dark');
  });
});
