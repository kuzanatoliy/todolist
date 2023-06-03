import { For, createResource } from 'solid-js';

import { purposeModel } from 'src/models';
import type { TComponent, IPurpose } from 'src/types';

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
      <ul>
        <For each={purposeList()}>
          {({ name, description, status, actions }) => (
            <li>
              <h3>{name}</h3>
              <p>{description}</p>
              <p>{status}</p>
              <ul>
                <For each={actions}>
                  {({ name, isCompleted }) => (
                    <li>
                      <h4>{name}</h4>
                      <p>{isCompleted}</p>
                    </li>
                  )}
                </For>
              </ul>
            </li>
          )}
        </For>
      </ul>
    </div>
  );
};

export default App;
