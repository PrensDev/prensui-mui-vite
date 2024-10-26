import type { Meta, StoryObj } from '@storybook/react';
import { DashboardHeader } from './DashboardHeader';

const meta = {
  component: DashboardHeader,
} satisfies Meta<typeof DashboardHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};