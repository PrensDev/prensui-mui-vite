import type { Meta, StoryObj } from '@storybook/react';

import { DashbboardBreadcrumbs } from './DashbboardBreadcrumbs';

const meta = {
  component: DashbboardBreadcrumbs,
} satisfies Meta<typeof DashbboardBreadcrumbs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  argTypes: {

  },
  args: {
    breadcrumbs: [
      {
        name: "Home",
        href: "#"
      }, {
        name: "Link 2",
        href: "#"
      }, {
        name: "Link 3",
        href: "#"
      }, {
        name: "Dashboard",
        href: "#"
      }
    ]
  }
};