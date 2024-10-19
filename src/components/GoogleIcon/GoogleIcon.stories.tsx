import type { Meta, StoryObj } from '@storybook/react';

import { GoogleIcon } from './GoogleIcon';

const meta = {
  component: GoogleIcon,
} satisfies Meta<typeof GoogleIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};