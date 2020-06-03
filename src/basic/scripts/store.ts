import { configureStore, combineReducers } from '@reduxjs/toolkit';
import countReducer from './count-slice';
import logReducer from './log-slice';

const rootReducer = combineReducers({
  count: countReducer,
  log: logReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
