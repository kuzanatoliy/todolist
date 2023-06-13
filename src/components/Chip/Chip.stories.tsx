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
