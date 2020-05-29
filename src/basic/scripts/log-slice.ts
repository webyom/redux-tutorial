import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Log = {
  time: number;
  type: 'increase' | 'decrease';
};

export type LogState = {
  logs: Log[];
};

const initialState: LogState = { logs: [] };

const logSlice = createSlice({
  name: 'log',
  initialState: initialState,
  reducers: {
    log: {
      reducer(state, action: PayloadAction<Log>): void {
        state.logs.push(action.payload);
      },
      prepare(log: Log): { payload: Log } {
        return { payload: log };
      },
    },
  },
});

export const { log } = logSlice.actions;

export default logSlice.reducer;
