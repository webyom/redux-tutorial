import { createStore } from 'redux';
import { handleActions } from 'redux-actions';
import { INCREMENT, DECREMENT } from './action-types';

export const DEFAULT_STATE = { count: 0 };

const reducer = handleActions(
  {
    [INCREMENT]: (state, action) => ({
      count: state.count + action.payload.count,
    }),
    [DECREMENT]: (state, action) => ({
      count: state.count + action.payload.count,
    }),
  },
  DEFAULT_STATE,
);

export const store = createStore(reducer);
