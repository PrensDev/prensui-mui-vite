import { Breadcrumbs, Link, Stack, Typography } from "@mui/material";

interface DashboardHeaderProps {
  title: string
}

export const DashboardHeader = ({
  title
}: Readonly<DashboardHeaderProps>) => {
  return (
    <Stack style={{ marginBottom: 20 }}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          MUI
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          Core
        </Link>
        <Typography sx={{ color: 'text.primary' }}>Breadcrumbs</Typography>
      </Breadcrumbs>

      <h1 style={{ margin: 0 }}>{title}</h1>
    </Stack>
  )
}