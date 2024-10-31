import { Stack } from "@mui/material";
import { DashbboardBreadcrumbs, DashboardBreadcrumb } from "../DashbboardBreadcrumbs/DashbboardBreadcrumbs";

interface DashboardHeaderProps {
  title: string,
  breadcrumbs?: DashboardBreadcrumb[]
}

export const DashboardHeader = ({
  title,
  breadcrumbs
}: Readonly<DashboardHeaderProps>) => {
  return (
    <Stack style={{ marginBottom: 20 }}>
      {breadcrumbs && <DashbboardBreadcrumbs breadcrumbs={breadcrumbs} />}
      <h1 style={{ margin: 0 }}>{title}</h1>
    </Stack>
  )
}