import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CountPayload = {
  count: number;
};

const countSlice = createSlice({
  name: 'count',
  initialState: { count: 0 },
  reducers: {
    increase: {
      reducer(state, action: PayloadAction<CountPayload>): void {
        state.count += action.payload.count;
      },
      prepare(count: number): { payload: CountPayload } {
        return { payload: { count } };
      },
    },
    decrease: {
      reducer(state, action: PayloadAction<CountPayload>): void {
        state.count += action.payload.count;
      },
      prepare(count: number): { payload: CountPayload } {
        return { payload: { count: -count } };
      },
    },
  },
});

export const { increase, decrease } = countSlice.actions;

export default countSlice.reducer;
