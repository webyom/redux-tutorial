import React from 'react';
import { CountComponent } from './count-component';
import { LogComponent } from './log-component';

export const ContentComponent = (): React.ReactElement => {
  return (
    <React.Fragment>
      <CountComponent />
      <LogComponent />
    </React.Fragment>
  );
};
