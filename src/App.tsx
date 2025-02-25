import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRoutes } from './providers/route';
import { Provider } from 'react-redux';
import store from './redux/store';
import { ThemeProvider } from './providers/themeContext/themeContext';

const App = () => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <ThemeProvider>
          <Router>
            <AppRoutes />
          </Router>
        </ThemeProvider>
      </Provider>
    </ErrorBoundary>
  );
};

export default App;
