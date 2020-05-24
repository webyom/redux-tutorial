import { AnyAction } from 'redux';
import { INCREMENT, DECREMENT } from './action-types';

export function increase(count = 1): AnyAction {
  return {
    type: INCREMENT,
    count: count,
  };
}

export function decrease(count = 1): AnyAction {
  return {
    type: DECREMENT,
    count: count,
  };
}
