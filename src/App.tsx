import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import { RouterProvider } from 'react-router-dom';
import { route } from './providers/route';
import { Provider } from 'react-redux';
import store from './redux/store';
import { ThemeProvider } from './providers/themeContext/themeContext';

const App = () => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <ThemeProvider>
          <RouterProvider router={route} />
        </ThemeProvider>
      </Provider>
    </ErrorBoundary>
  );
};

export default App;
