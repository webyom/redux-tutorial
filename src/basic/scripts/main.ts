import { store } from './store';
import { increase, decrease, fetchCount, CountState } from './count-slice';
import { log, LogState } from './log-slice';
import '../styles/index.scss';

class App implements Application {
  updateCount(state: CountState): void {
    const content = state.error ? state.error.message : state.loading ? 'loading...' : state.count;
    document.getElementById('count').innerHTML = content.toString();
  }

  updateLog(state: LogState): void {
    document.getElementById('logs').innerHTML = state.logs
      .map(log => {
        return `<div>${new Date(log.time).toLocaleString()} ${log.type}</div>`;
      })
      .join('');
  }

  render(): void {
    const state = store.getState();
    this.updateCount(state.count);
    this.updateLog(state.log);
  }

  async boot(): Promise<void> {
    this.render();

    store.subscribe(this.render.bind(this));

    document.getElementById('btn-increase').addEventListener(
      'click',
      () => {
        store.dispatch(increase(1));
        store.dispatch(
          log({
            type: 'increase',
            time: Date.now(),
          }),
        );
      },
      false,
    );

    document.getElementById('btn-decrease').addEventListener(
      'click',
      () => {
        store.dispatch(decrease(1));
        store.dispatch(
          log({
            type: 'decrease',
            time: Date.now(),
          }),
        );
      },
      false,
    );

    store.dispatch(fetchCount());
  }
}

export default new App();
