import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filter: '',
};

export const reducer = createReducer(initialState, () => {
  return initialState;
});
