import { combineReducers } from '@reduxjs/toolkit';
import { baseApi } from './services/baseApi';
import charactersSlice from './slices/charactersSlice';
import queryParamsSlice from './slices/queryParamsSlice';
import selectedItemsSlice from './slices/selectedItemsSlice';

export const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  characters: charactersSlice,
  queryParams: queryParamsSlice,
  selectedItems: selectedItemsSlice,
});
