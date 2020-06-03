import React from 'react';
import ReactDOM from 'react-dom';
import { RootComponent } from './root-component';
import '../styles/index.scss';

class App implements Application {
  async boot(): Promise<void> {
    const container = document.getElementById('page-containner');
    container.innerHTML = '';
    ReactDOM.render(React.createElement(RootComponent, {}), container);
  }
}

export default new App();
