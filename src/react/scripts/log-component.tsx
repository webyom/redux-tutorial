import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '@/basic/scripts/store';
import { createSelector } from '@reduxjs/toolkit';

type ContentProps = ReturnType<typeof mapState>;

export const Log = (props: ContentProps): React.ReactElement => {
  return (
    <div>
      {props.logs.map((log, i) => (
        <div key={i}>{log}</div>
      ))}
    </div>
  );
};

const getLogs = createSelector(
  (state: RootState) => state.log,
  log => {
    return {
      logs: log.logs.map(log => {
        return `${new Date(log.time).toLocaleString()} ${log.type}`;
      }),
    };
  },
);

const mapState = (state: RootState) => {
  return getLogs(state);
};

export const LogComponent = connect(mapState)(Log);
