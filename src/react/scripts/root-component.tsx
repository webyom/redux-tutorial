import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../basic/scripts/store';
import { ContentComponent } from './content-component';

export const RootComponent = (): React.ReactElement => {
  return (
    <Provider store={store}>
      <ContentComponent />
    </Provider>
  );
};
