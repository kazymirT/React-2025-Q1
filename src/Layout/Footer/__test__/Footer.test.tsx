import { cleanup } from '@testing-library/react';
import { renderWithProviders } from '@/test/helper';
import Footer from '../Footer';
import { SELECTED_CONTROL } from '../components/SelectedControl/constants';
import { MOCK_CHARACTERS } from '@/test/mock/mockData';

describe('Footer', () => {
  afterEach(() => {
    cleanup();
  });
  beforeAll(() => {
    global.URL.createObjectURL = vi.fn(() => 'mocked_blob_url');
  });
  it('should render footer without items', async () => {
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
  it('should render footer with items', async () => {
    const { queryByRole, queryByText } = renderWithProviders(<Footer />, {
      preloadedState: {
        selectedItems: {
          selectedItemsId: [1, 2, 3],
          selectedItems: MOCK_CHARACTERS,
        },
      },
    });

    const btnUnselect = queryByRole('button', {
      name: SELECTED_CONTROL.btnUnselect,
    });
    expect(
      queryByRole('link', { name: SELECTED_CONTROL.btnDownload })
    ).toBeInTheDocument();
    expect(queryByText(`3 ${SELECTED_CONTROL.text}`)).toBeInTheDocument();

    expect(btnUnselect).toBeInTheDocument();
  });
  it('should render footer with items', async () => {
    const { queryByRole, user, store } = renderWithProviders(<Footer />, {
      preloadedState: {
        selectedItems: {
          selectedItemsId: [1, 2, 3],
          selectedItems: MOCK_CHARACTERS,
        },
      },
    });

    const btnUnselect = queryByRole('button', {
      name: SELECTED_CONTROL.btnUnselect,
    }) as HTMLElement;

    expect(btnUnselect).toBeInTheDocument();

    await user.click(btnUnselect);

    expect(store.getState().selectedItems.selectedItemsId).toHaveLength(0);
  });
});
