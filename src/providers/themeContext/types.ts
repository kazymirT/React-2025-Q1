import type { ReactNode } from 'react';

export interface ThemeProviderProps {
  children: ReactNode;
}

export interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}
