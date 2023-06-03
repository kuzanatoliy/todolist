import { TParentComponent } from 'src/types';

import styles from './PageTitle.module.scss';

export const PageTitle: TParentComponent = (props) => (
  <h2 class={styles.pageTitle}>{props.children}</h2>
);
