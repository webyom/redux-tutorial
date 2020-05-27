import { configureStore } from '@reduxjs/toolkit';
import countReducer from './count-slice';

export const store = configureStore({ reducer: countReducer });
