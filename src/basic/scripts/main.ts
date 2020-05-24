import { DEFAULT_STATE, store } from './store';
import '../styles/index.scss';

class App implements Application {
  updateCount(count: number): void {
    document.getElementById('count').innerHTML = count.toString();
  }

  async boot(): Promise<void> {
    this.updateCount(DEFAULT_STATE);

    store.subscribe(() => {
      this.updateCount(store.getState());
    });

    document.getElementById('btn-increase').addEventListener(
      'click',
      () => {
        store.dispatch({ type: 'INCREMENT' });
      },
      false,
    );

    document.getElementById('btn-decrease').addEventListener(
      'click',
      () => {
        store.dispatch({ type: 'DECREMENT' });
      },
      false,
    );
  }
}

export default new App();
