import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../basic/scripts/store';
import { increase, decrease, fetchCount } from '../../basic/scripts/count-slice';
import { log } from '../../basic/scripts/log-slice';

export const CountComponent = (): React.ReactElement => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.count);
  const doFetchCount = useCallback(() => dispatch(fetchCount()), []);
  const doIncrease = useCallback(() => {
    dispatch(increase(1));
    dispatch(
      log({
        type: 'increase',
        time: Date.now(),
      }),
    );
  }, []);
  const doDecrease = useCallback(() => {
    dispatch(decrease(1));
    dispatch(
      log({
        type: 'decrease',
        time: Date.now(),
      }),
    );
  }, []);

  useEffect(() => {
    doFetchCount();
  }, []);

  return (
    <React.Fragment>
      <div>{count.error ? count.error.message : count.loading ? 'Loading...' : count.count}</div>
      <button onClick={doIncrease}>Increase</button> <button onClick={doDecrease}>Decrease</button>
    </React.Fragment>
  );
};
