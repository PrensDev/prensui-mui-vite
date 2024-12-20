import type { Meta, StoryObj } from '@storybook/react';
import { DashboardHeader } from './DashboardHeader';

const meta = {
  component: DashboardHeader,
} satisfies Meta<typeof DashboardHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Dashboard",
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