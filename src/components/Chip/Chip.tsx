import { mergeProps } from 'solid-js';

import { TComponent } from 'src/types';

import { EChipVariant, EChipColorScheme } from './Chip.types';

import styles from './Chip.module.scss';

export interface IChipProps {
  text?: string;
  variant?: EChipVariant;
  colorScheme?: EChipColorScheme;
}

const defaultProps = {
  text: '',
  variant: EChipVariant.DEFAULT,
  colorScheme: EChipColorScheme.DEFAULT,
};

export const Chip: TComponent<IChipProps> = (props) => {
  const mergedProps = mergeProps(defaultProps, props);

  return (
    <div
      class={`${styles.chip} ${
        styles[`chip__${props.variant}__${props.colorScheme}`]
      }`}
    >
      {mergedProps.text}
    </div>
  );
};
