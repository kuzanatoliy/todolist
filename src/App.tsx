import { For, createResource } from 'solid-js';

import type { TComponent, IPurpose } from 'src/types';
import { purposeModel } from 'src/models';
import { Card, List, ListItem } from 'src/components';

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
    <div class={styles.container}>
      <header class={styles.headerContainer}>
        <h1 class={styles.headerTitle}>Todolist</h1>
      </header>
      <main class={styles.mainContainer}>
        <List>
          <For each={purposeList()}>
            {({ name, description, status, actions }) => (
              <ListItem>
                <Card>
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
                </Card>
              </ListItem>
            )}
          </For>
        </List>
      </main>
      <footer class={styles.footerContainer}>© Kuzanatoliorg 2023</footer>
    </div>
  );
};

export default App;
