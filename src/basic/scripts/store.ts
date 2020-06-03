import { configureStore, combineReducers } from '@reduxjs/toolkit';
import countReducer from './count-slice';
import logReducer from './log-slice';

export const store = configureStore({
  reducer: combineReducers({
    count: countReducer,
    log: logReducer,
  }),
});

export type AppDispatch = typeof store.dispatch;
