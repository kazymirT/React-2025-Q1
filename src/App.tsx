import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import { RouterProvider } from 'react-router-dom';
import { route } from './providers/route';

const App = () => {
  return (
    <ErrorBoundary>
      <RouterProvider router={route} />
    </ErrorBoundary>
  );
};

export default App;
