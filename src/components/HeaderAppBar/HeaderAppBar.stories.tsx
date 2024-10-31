import type { Meta, StoryObj } from '@storybook/react';

import { HeaderAppBar } from './HeaderAppBar';

const meta = {
  component: HeaderAppBar,
} satisfies Meta<typeof HeaderAppBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    openSidebar: true,
    setOpenSidebar: () => {}
  }
};