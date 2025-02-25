import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Page404 from '../pages/Page404/Page404';
import Details from '../pages/Details/Details';
import Layout from '@/Layout/Layout/Layout';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />} errorElement={<ErrorPage />}>
        <Route path="/" element={<Home />}>
          <Route path="/details/:detailsId" element={<Details />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
};
