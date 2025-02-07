import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import Home from '../pages/Home/Home';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Page404 from '../pages/Page404/Page404';
import Details from '../pages/Details/Details';
import { loader } from '../pages/Details/loader';

export const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />} errorElement={<ErrorPage />}>
      <Route path="/details/:detailsId" element={<Details />} loader={loader} />
      <Route path="*" element={<Page404 />} />
    </Route>
  )
);
