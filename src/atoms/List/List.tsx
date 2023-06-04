import { TParentComponent } from 'src/types';

import styles from './List.module.scss';

export const List: TParentComponent = (props) => (
  <ul class={styles.list}>{props.children}</ul>
);
