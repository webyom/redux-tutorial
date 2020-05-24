import { createStore, Action } from 'redux';
import { INCREMENT, DECREMENT } from './action-types';

export const DEFAULT_STATE = 0;

function counter(state = DEFAULT_STATE, action: Action): number {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
}

export const store = createStore(counter);
