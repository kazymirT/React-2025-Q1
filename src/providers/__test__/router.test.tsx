import { Outlet } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import { AppRoutes } from '../route';
import { renderWithProviders } from '@/test/helper';

vi.mock('../../pages/Home/Home.tsx', () => ({
  default: () => (
    <div>
      <div>Home Page</div>
      <Outlet />
    </div>
  ),
}));

vi.mock('../../pages/Details/Details.tsx', () => ({
  default: () => <div>Details Page</div>,
}));

vi.mock('../../pages/Page404/Page404.tsx', () => ({
  default: () => <div>404 Page</div>,
}));

describe('AppRoutes', () => {
  it('renders Home component on the root path', () => {
    const { getByText } = renderWithProviders(<AppRoutes />, {}, '/');

    expect(getByText('Home Page')).toBeInTheDocument();
  });

  it('renders Details component on the details path', () => {
    const { getByText } = renderWithProviders(<AppRoutes />, {}, '/details/23');

    expect(getByText('Details Page')).toBeInTheDocument();
  });

  it('renders 404 component for unknown paths', () => {
    const { getByText } = renderWithProviders(<AppRoutes />, {}, '/404');

    expect(getByText('404 Page')).toBeInTheDocument();
  });
});
