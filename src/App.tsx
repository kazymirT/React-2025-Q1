import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import { RouterProvider } from 'react-router-dom';
import { route } from './providers/route';
import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <RouterProvider router={route} />
      </Provider>
    </ErrorBoundary>
  );
};

export default App;
