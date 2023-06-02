import type { Component } from 'solid-js';

import styles from './App.module.scss';
import { purposeModel } from './models';

const App: Component = () => {
  purposeModel.get().then((res) => console.log(res));

  return <div class={styles.App}>test</div>;
};

export default App;
