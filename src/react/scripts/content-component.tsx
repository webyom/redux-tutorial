import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { AppDispatch } from '../../basic/scripts/store';
import { increase, decrease, fetchCount, CountState } from '../../basic/scripts/count-slice';
import { log, LogState } from '../../basic/scripts/log-slice';

type ContentProps = ReturnType<typeof mapDispatch> & ReturnType<typeof mapState>;

export const Content = (props: ContentProps): React.ReactElement => {
  useEffect(() => {
    props.fetchCount();
  }, []);

  return (
    <React.Fragment>
      <div>
        {props.count.error ? props.count.error.message : props.count.loading ? 'Loading...' : props.count.count}
      </div>
      <button onClick={props.increase}>Increase</button> <button onClick={props.decrease}>Decrease</button>
      <div>
        {props.log.logs.map((log, i) => (
          <div key={log.time + '_' + i}>
            {new Date(log.time).toLocaleString()} {log.type}
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

const mapState = ({ count, log }: { count: CountState; log: LogState }) => {
  return { count, log };
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

export const ContentComponent = connect(mapState, mapDispatch)(Content);
