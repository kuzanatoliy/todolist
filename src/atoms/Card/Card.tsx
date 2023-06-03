import { TParentComponent } from 'src/types';

import styles from './Card.module.scss';

export const Card: TParentComponent = (props) => (
  <div class={styles.card}>{props.children}</div>
);
