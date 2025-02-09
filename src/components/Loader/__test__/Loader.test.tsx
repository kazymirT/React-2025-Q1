import { cleanup } from '@testing-library/react';
import { renderWithProviders } from '@/test/helper';
import Loader from '../Loader';
import { LOADER_TEST_ID } from '../constants';

describe('Loader', async () => {
  afterEach(() => {
    cleanup();
  });
  it('should render Loader', () => {
    const { getByTestId } = renderWithProviders(<Loader />);

    const wrapper = getByTestId(LOADER_TEST_ID);
    const loader = wrapper.children[0] as HTMLDivElement;

    expect(wrapper).toBeInTheDocument();
    expect(loader).toHaveClass('loader');
  });
});
