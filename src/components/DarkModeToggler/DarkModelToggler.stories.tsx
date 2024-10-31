import type { Meta, StoryObj } from '@storybook/react';

import DarkModelToggler from './DarkModelToggler';

const meta = {
  component: DarkModelToggler,
} satisfies Meta<typeof DarkModelToggler>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};