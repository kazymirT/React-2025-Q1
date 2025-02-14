import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Character } from 'rickmortyapi';
import { RootState } from '../store';

type SelectedItemsState = {
  selectedItemsId: number[];
  selectedItems: Character[];
};

const initialState: SelectedItemsState = {
  selectedItems: [],
  selectedItemsId: [],
};

export const selectedItemsSlice = createSlice({
  name: 'selectedItems',
  initialState,
  reducers: {
    toggleItemSelection: (state, action: PayloadAction<Character>) => {
      const itemId = action.payload.id;
      const index = state.selectedItemsId.indexOf(itemId);

      if (index !== -1) {
        state.selectedItemsId.splice(index, 1);
        state.selectedItems = state.selectedItems.filter(
          (item) => item.id !== itemId
        );
      } else {
        state.selectedItemsId.push(itemId);
        state.selectedItems.push(action.payload);
      }
    },
    clearSelection: (state) => {
      state.selectedItems = [];
      state.selectedItemsId = [];
    },
  },
});

export const { clearSelection, toggleItemSelection } =
  selectedItemsSlice.actions;
export const selectedItem = (state: RootState) => state.selectedItems;
export default selectedItemsSlice.reducer;
