import { For } from 'solid-js';
import type { Meta, StoryObj } from 'storybook-solidjs';

import { EChipColorScheme, EChipVariant } from './Chip.types';
import { Chip } from './Chip';

const meta = {
  title: 'Components/Chip',
  component: Chip,
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text',
      description: "Chip's text value",
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Chip component' },
      },
    },
    variant: {
      control: 'select',
      description: "Chip's variant option",
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: EChipVariant.DEFAULT },
      },
      options: [
        EChipVariant.DEFAULT,
        EChipVariant.FILLED,
        EChipVariant.OUTLINED,
      ],
    },
    colorScheme: {
      control: 'select',
      description: "Chip's color scheme option",
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: EChipColorScheme.DEFAULT },
      },
      options: [
        EChipColorScheme.DEFAULT,
        EChipColorScheme.DARKEST,
        EChipColorScheme.DARK,
        EChipColorScheme.NORMAL,
        EChipColorScheme.LIGHT,
        EChipColorScheme.LIGHTEST,
      ],
    },
  },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: meta.argTypes.text.table.defaultValue.summary,
    variant: meta.argTypes.variant.table.defaultValue.summary,
    colorScheme: meta.argTypes.colorScheme.table.defaultValue.summary,
  },
};

export const Variant: Story = {
  render: (props) => (
    <div style={{ display: 'flex', gap: '16px' }}>
      <For each={meta.argTypes.colorScheme.options.slice(1)}>
        {(colorScheme) => (
          <Chip text='chip' variant={props.variant} colorScheme={colorScheme} />
        )}
      </For>
    </div>
  ),
  argTypes: {
    ...Object.keys(meta.argTypes).reduce<Record<string, unknown>>(
      (prev, curr) => {
        prev[curr] = { control: false };
        return prev;
      },
      {}
    ),
    variant: meta.argTypes.variant.table.defaultValue.summary,
  },
};

export const ColorScheme: Story = {
  render: (props) => (
    <div style={{ display: 'flex', gap: '16px' }}>
      <For each={meta.argTypes.variant.options.slice(1)}>
        {(variant) => (
          <Chip text='chip' variant={variant} colorScheme={props.colorScheme} />
        )}
      </For>
    </div>
  ),
  argTypes: {
    ...Object.keys(meta.argTypes).reduce<Record<string, unknown>>(
      (prev, curr) => {
        prev[curr] = { control: false };
        return prev;
      },
      {}
    ),
    colorScheme: meta.argTypes.colorScheme.table.defaultValue.summary,
  },
};
