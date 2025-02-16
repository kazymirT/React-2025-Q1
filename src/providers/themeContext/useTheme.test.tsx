import { renderHook } from '@testing-library/react';
import { useTheme } from './useTheme';

describe('useTheme', () => {
  it('should throw an error when used outside of ThemeProvider', () => {
    const consoleErrorMock = vi
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    expect(() => renderHook(() => useTheme())).toThrowError(
      'useTheme must be used within a ThemeProvider'
    );

    consoleErrorMock.mockRestore();
  });
});
