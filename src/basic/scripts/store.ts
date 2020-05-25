import { createReducer, configureStore } from '@reduxjs/toolkit';
import { increase, decrease } from './action-creators';

export const DEFAULT_STATE = { count: 0 };

const reducer = createReducer(DEFAULT_STATE, {
  [increase.type]: (state, action) => ({
    count: state.count + action.payload.count,
  }),
  [decrease.type]: (state, action) => ({
    count: state.count + action.payload.count,
  }),
});

export const store = configureStore({ reducer });
