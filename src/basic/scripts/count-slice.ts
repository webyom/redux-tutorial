import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { apiCommon } from '../../common/scripts/base/fetch';

type CountPayload = {
  count: number;
};

export type CountState = {
  count: number;
  loading: boolean;
  error: Error;
};

const initialState: CountState = { count: 0, loading: false, error: null };

export const fetchCount = createAsyncThunk(
  'count/fetchCount',
  async (): Promise<CountPayload> => {
    const res = await apiCommon.get('/api/count/');
    return { count: res.data.count };
  },
);

const countSlice = createSlice({
  name: 'count',
  initialState: initialState,
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
  extraReducers: {
    [fetchCount.pending.type]: (state): void => {
      state.loading = true;
    },
    [fetchCount.fulfilled.type]: (state, action: PayloadAction<CountPayload>): void => {
      state.count = action.payload.count;
      state.loading = false;
    },
    [fetchCount.rejected.type]: (state, action: PayloadAction<void, string, never, Error>): void => {
      state.error = action.error;
      state.loading = false;
    },
  },
});

export const { increase, decrease } = countSlice.actions;

export default countSlice.reducer;
