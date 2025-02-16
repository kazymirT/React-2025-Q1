import { cleanup } from '@testing-library/react';
import { renderWithProviders } from '@/test/helper';
import Footer from '../Footer';
import { SELECTED_CONTROL } from '../components/SelectedControl/constants';

describe('Footer', () => {
  afterEach(() => {
    cleanup();
  });
  it('should render footer with error button', async () => {
    const { queryByRole, queryByText } = renderWithProviders(<Footer />, {
      preloadedState: {
        selectedItems: {
          selectedItemsId: [],
          selectedItems: [],
        },
      },
    });

    const btnUnselect = queryByRole('button', {
      name: SELECTED_CONTROL.btnUnselect,
    });
    expect(
      queryByRole('button', { name: SELECTED_CONTROL.btnDownload })
    ).not.toBeInTheDocument();
    expect(queryByText(`3 ${SELECTED_CONTROL.text}`)).not.toBeInTheDocument();

    expect(btnUnselect).not.toBeInTheDocument();
  });
});
