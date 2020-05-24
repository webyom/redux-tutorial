import { store } from './store';
import { increase, decrease } from './action-creators';
import '../styles/index.scss';

class App implements Application {
  updateCount(count: number): void {
    document.getElementById('count').innerHTML = count.toString();
  }

  async boot(): Promise<void> {
    this.updateCount(store.getState());

    store.subscribe(() => {
      this.updateCount(store.getState());
    });

    document.getElementById('btn-increase').addEventListener(
      'click',
      () => {
        store.dispatch(increase());
      },
      false,
    );

    document.getElementById('btn-decrease').addEventListener(
      'click',
      () => {
        store.dispatch(decrease());
      },
      false,
    );
  }
}

export default new App();
