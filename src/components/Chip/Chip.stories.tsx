import type { Meta, StoryObj } from 'storybook-solidjs';

import { Chip } from './Chip';

const meta = {
  title: 'Components/Chip',
  component: Chip,
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: { type: 'text' },
      description: "Chip's text value",
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Chip component' },
      },
    },
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'test',
  },
};
