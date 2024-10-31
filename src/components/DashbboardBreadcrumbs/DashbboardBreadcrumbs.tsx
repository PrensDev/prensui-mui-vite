import { Breadcrumbs, Link, Typography } from "@mui/material"

interface DashbboardBreadcrumbsProps {
  breadcrumbs: DashboardBreadcrumb[]
}

export interface DashboardBreadcrumb {
  name: string,
  href?: string
}

export const DashbboardBreadcrumbs = ({
  breadcrumbs
}: Readonly<DashbboardBreadcrumbsProps>) => {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      {breadcrumbs.map((breadcrumb, idx) => {
        if (idx < breadcrumbs.length - 1) {
          return (
            <Link
              underline="hover"
              color="inherit"
              href="#"
            >
              {breadcrumb.name}
            </Link>
          )
        } else {
          return (<Typography sx={{ color: 'text.primary' }}>{breadcrumb.name}</Typography>)
        }
      })}
    </Breadcrumbs>
  )
}