import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit';
import { apiCommon } from '../../common/scripts/base/fetch';

type CountPayload = {
  count: number;
};

type CountState = {
  count: number;
  loading: boolean;
  error: Error;
};

const initialState: CountState = { count: 0, loading: false, error: null };

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
    fetchCountStart(state): void {
      state.loading = true;
    },
    fetchCountSuccess: {
      reducer(state, action: PayloadAction<CountPayload>): void {
        state.count = action.payload.count;
        state.loading = false;
      },
      prepare(count: number): { payload: CountPayload } {
        return { payload: { count } };
      },
    },
    fetchCountFail: {
      reducer(state, action: PayloadAction<void, string, never, Error>): void {
        state.error = action.error;
        state.loading = false;
      },
      prepare(error: Error): { payload: any; error: Error } {
        return { payload: null, error };
      },
    },
  },
});

export const { increase, decrease, fetchCountStart, fetchCountSuccess, fetchCountFail } = countSlice.actions;

export default countSlice.reducer;

export const fetchCount = () => async (dispatch: Dispatch): Promise<void> => {
  dispatch(fetchCountStart());
  try {
    const res = await apiCommon.get('/api/count/');
    dispatch(fetchCountSuccess(res.data.count));
  } catch (err) {
    dispatch(fetchCountFail(new Error(err)));
  }
};
