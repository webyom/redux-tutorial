import { createStore, AnyAction } from 'redux';
import { INCREMENT, DECREMENT } from './action-types';

export const DEFAULT_STATE = 0;

function counter(state = DEFAULT_STATE, action: AnyAction): number {
  switch (action.type) {
    case INCREMENT:
      return state + action.count;
    case DECREMENT:
      return state - action.count;
    default:
      return state;
  }
}

export const store = createStore(counter);
