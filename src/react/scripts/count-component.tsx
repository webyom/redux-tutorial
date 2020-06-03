import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { AppDispatch, RootState } from '../../basic/scripts/store';
import { increase, decrease, fetchCount } from '../../basic/scripts/count-slice';
import { log } from '../../basic/scripts/log-slice';

type ContentProps = ReturnType<typeof mapDispatch> & ReturnType<typeof mapState>;

export const Count = (props: ContentProps): React.ReactElement => {
  useEffect(() => {
    props.fetchCount();
  }, []);

  return (
    <React.Fragment>
      <div>{props.error ? props.error.message : props.loading ? 'Loading...' : props.count}</div>
      <button onClick={props.increase}>Increase</button> <button onClick={props.decrease}>Decrease</button>
    </React.Fragment>
  );
};

const mapState = (state: RootState) => {
  return state.count;
};

const mapDispatch = (dispatch: AppDispatch) => {
  return {
    increase: () => {
      dispatch(increase(1));
      dispatch(
        log({
          type: 'increase',
          time: Date.now(),
        }),
      );
    },
    decrease: () => {
      dispatch(decrease(1));
      dispatch(
        log({
          type: 'decrease',
          time: Date.now(),
        }),
      );
    },
    fetchCount: () => dispatch(fetchCount()),
  };
};

export const CountComponent = connect(mapState, mapDispatch)(Count);
