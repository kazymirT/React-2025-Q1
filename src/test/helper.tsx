import ErrorBoundary from '@/components/ErrorBoundary/ErrorBoundary';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { PropsWithChildren, ReactElement } from 'react';
import { MemoryRouter } from 'react-router-dom';

export function renderWithProviders(ui: ReactElement) {
  function Wrapper({ children }: PropsWithChildren<object>): JSX.Element {
    return (
      <ErrorBoundary>
        <MemoryRouter>{children}</MemoryRouter>
      </ErrorBoundary>
    );
  }
  const user = userEvent.setup();
  return { ...render(ui, { wrapper: Wrapper }), user };
}
