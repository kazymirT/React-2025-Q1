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
    setCharacters: (state, action: PayloadAction<Character[]>) => {
      state.allCharacters = action.payload;
    },
    setDetails: (state, action: PayloadAction<Character | null>) => {
      state.detailsCharacter = action.payload;
    },
  },
});

export const { setCharacters, setDetails } = charactersSlice.actions;
export const characters = (state: RootState) => state.characters;
export default charactersSlice.reducer;
