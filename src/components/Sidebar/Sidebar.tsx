import DashboardIcon from '@mui/icons-material/Dashboard';
import LayersIcon from '@mui/icons-material/Layers';
import TableViewIcon from '@mui/icons-material/TableView';
import { Divider, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';

const sidebarItems = [
  {
    groupId: "general",
    title: "",
    items: [
      {
        title: "Dashboard",
        icon: <DashboardIcon />,
        link: "/dashboard"
      }, {
        title: "Datatable",
        icon: <TableViewIcon />,
        link: "/datatable"
      },
    ]
  }, {
    groupId: "pages",
    title: "Pages",
    items: Array(10).fill(0).map((_, i) => {
      const id = i + 1;
      return {
        title: `Page ${ id }`,
        icon: <LayersIcon />,
        link: `/page/${ id }`
      }
    })
  }
]

export const Sidebar = () => {
  const navigate = useNavigate()

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
      }}
    >
      <Toolbar />
      {sidebarItems.map((sidebarItem, idx) => (
        <>
          {idx > 0 && <Divider />}
          {sidebarItem.title && (
            <Typography
              px={2}
              pt={1}
              fontWeight={600}
              fontSize={12}
            >{sidebarItem.title}</Typography>
          )}
          <List key={sidebarItem.groupId}>
            {sidebarItem.items.map(item => (
              <ListItemButton key={item.title} onClick={() => { navigate(item.link) }}>
                {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
                <ListItemText primary={item.title} />
              </ListItemButton>
            ))}
          </List>
        </>
      ))}
    </Drawer>
  )
}