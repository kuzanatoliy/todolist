/* @refresh reload */
import { render } from 'solid-js/web';

import App from './App';

import './theme.scss';
import './index.scss';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?'
  );
}

const renderRoot = () => {
  if (root) {
    root.textContent = '';
  }

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  render(() => <App />, root!);
};

const delay = 1000 - (Date.now() - window.performance.timeOrigin);

if (delay > 0) {
  setTimeout(renderRoot, delay);
} else {
  renderRoot();
}
