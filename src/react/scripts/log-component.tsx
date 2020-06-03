import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../basic/scripts/store';

type ContentProps = ReturnType<typeof mapState>;

export const Log = (props: ContentProps): React.ReactElement => {
  return (
    <div>
      {props.logs.map((log, i) => (
        <div key={log.time + '_' + i}>
          {new Date(log.time).toLocaleString()} {log.type}
        </div>
      ))}
    </div>
  );
};

const mapState = (state: RootState) => {
  return state.log;
};

export const LogComponent = connect(mapState)(Log);
