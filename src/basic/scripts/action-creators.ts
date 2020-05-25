import { createAction } from '@reduxjs/toolkit';

export const increase = createAction('increment', (count: number) => ({ payload: { count } }));
export const decrease = createAction('decrement', (count: number) => ({ payload: { count: -count } }));
