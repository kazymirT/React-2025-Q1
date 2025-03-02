import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

const params = new URLSearchParams(window.location.search);

type QueryParamsState = {
  name: string;
  page: number;
};

const initialState: QueryParamsState = {
  name: params.get('name') || '',
  page: Number(params.get('page')) || 1,
};

export const queryParamsSlice = createSlice({
  name: 'queryParams',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
      state.page = 1;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
});

export const { setName, setPage } = queryParamsSlice.actions;
export const queryParams = (state: RootState) => state.queryParams;
export default queryParamsSlice.reducer;
