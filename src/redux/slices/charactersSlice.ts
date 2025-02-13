import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Character } from 'rickmortyapi';
import { RootState } from '../store';

type CharactersState = {
  allCharacters: Character[];
  detailsCharacter: Character | null;
};

const initialState: CharactersState = {
  allCharacters: [],
  detailsCharacter: null,
};

export const charactersSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    addCharacters: (state, action: PayloadAction<Character[]>) => {
      state.allCharacters = action.payload;
    },
    addDetails: (state, action: PayloadAction<Character | null>) => {
      state.detailsCharacter = action.payload;
    },
  },
});

export const { addCharacters, addDetails } = charactersSlice.actions;
export const characters = (state: RootState) => state.characters;
export default charactersSlice.reducer;
