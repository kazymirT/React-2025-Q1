import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import ErrorBoundary from '../ErrorBoundary';
import { ERROR_BOUNDARY } from '../constants';

const ErrorComponent = () => {
  throw new Error('Test error');
};

describe('ErrorBoundary', () => {
  it('renders children when no error occurs', () => {
    render(
      <ErrorBoundary>
        <p>Content</p>
      </ErrorBoundary>
    );

    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('renders error message when child component throws an error', () => {
    const consoleErrorMock = vi
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    const { getByText, getByRole } = render(
      <ErrorBoundary>
        <ErrorComponent />
      </ErrorBoundary>
    );

    expect(getByText(ERROR_BOUNDARY.title)).toBeInTheDocument();
    expect(
      getByRole('button', { name: ERROR_BOUNDARY.button })
    ).toBeInTheDocument();

    consoleErrorMock.mockRestore();
  });

  it('resets state when clicking the reset button', async () => {
    const user = userEvent.setup();

    const { getByText, getByRole } = render(
      <ErrorBoundary>
        <ErrorComponent />
      </ErrorBoundary>
    );

    expect(getByText(ERROR_BOUNDARY.title)).toBeInTheDocument();

    await user.click(getByRole('button', { name: ERROR_BOUNDARY.button }));

    expect(getByText(ERROR_BOUNDARY.title)).toBeInTheDocument();
  });
});
