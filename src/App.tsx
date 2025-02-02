import { Component, type ReactNode } from 'react';
import Home from './pages/Home/Home';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

export default class App extends Component {
  render(): ReactNode {
    return (
      <ErrorBoundary>
        <Home />
      </ErrorBoundary>
    );
  }
}
