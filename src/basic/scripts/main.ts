import { store } from './store';
import { increase, decrease } from './action-creators';
import '../styles/index.scss';

class App implements Application {
  updateCount(count: number): void {
    document.getElementById('count').innerHTML = count.toString();
  }

  render(): void {
    const state = store.getState();
    this.updateCount(state.count);
  }

  async boot(): Promise<void> {
    this.render();

    store.subscribe(this.render.bind(this));

    document.getElementById('btn-increase').addEventListener(
      'click',
      () => {
        store.dispatch(increase(1));
      },
      false,
    );

    document.getElementById('btn-decrease').addEventListener(
      'click',
      () => {
        store.dispatch(decrease(1));
      },
      false,
    );
  }
}

export default new App();
