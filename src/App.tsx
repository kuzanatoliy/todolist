import { For, createResource } from 'solid-js';

import type { TComponent, IPurpose } from 'src/types';
import { purposeModel } from 'src/models';
import { List, ListItem } from 'src/components';

import styles from './App.module.scss';

const App: TComponent = () => {
  const [purposeList, purposeListActions] = createResource<IPurpose[]>(
    purposeModel.get,
    {
      initialValue: [],
    }
  );

  setTimeout(() => purposeListActions.refetch(), 5000);

  return (
    <div class={styles.App}>
      <List>
        <For each={purposeList()}>
          {({ name, description, status, actions }) => (
            <ListItem>
              <h3>{name}</h3>
              <p>{description}</p>
              <p>{status}</p>
              <List>
                <For each={actions}>
                  {({ name, isCompleted }) => (
                    <ListItem>
                      <h4>{name}</h4>
                      <p>{isCompleted}</p>
                    </ListItem>
                  )}
                </For>
              </List>
            </ListItem>
          )}
        </For>
      </List>
    </div>
  );
};

export default App;
