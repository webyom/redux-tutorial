import { createAction } from 'redux-actions';
import { INCREMENT, DECREMENT } from './action-types';

export const increase = createAction(INCREMENT, (count: number) => ({ count }));
export const decrease = createAction(DECREMENT, (count: number) => ({ count: -count }));
