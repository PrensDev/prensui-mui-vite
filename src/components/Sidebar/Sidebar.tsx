import DashboardIcon from '@mui/icons-material/Dashboard';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import LayersIcon from '@mui/icons-material/Layers';
import LayersClearIcon from '@mui/icons-material/LayersClear';
import TabIcon from '@mui/icons-material/Tab';
import TableViewIcon from '@mui/icons-material/TableView';
import { Box, Chip, Divider, List, ListItemButton, ListItemIcon, ListItemText, styled, Toolbar, Tooltip, Typography } from "@mui/material";
import MuiDrawer from '@mui/material/Drawer';
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
      }
    ]
  }, {
    groupId: "elements",
    title: "Elements",
    items: [
      {
        title: "Datatable",
        icon: <TableViewIcon />,
        link: "/datatable",
        chip: 1
      }, {
        title: "Forms",
        icon: <FormatAlignCenterIcon />,
        link: "/forms"
      }, {
        title: "Tabs",
        icon: <TabIcon />,
        link: "/tabs"
      }
    ]
  }, {
    groupId: "pages",
    title: "Pages",
    items: Array(5).fill(0).map((_, i) => {
      const id = i + 1;
      return {
        title: `Page ${ id }`,
        icon: <LayersIcon />,
        link: `/page/${ id }`,
        chip: i === 3 ? "99+" : null
      }
    })
  }, {
    groupId: "otherPages",
    title: "Other Pages",
    items: [
      {
        title: "404",
        icon: <LayersClearIcon />,
        link: "/notfound"
      }
    ]
  }
]

const SidebarDrawer = styled(MuiDrawer)(
  ({ theme }) => ({
    width: 240,
    overflowX: 'hidden',
    variants: [
      {
        props: ({ open }) => open,
        style: {
          width: 240
        }
      }, {
        props: ({ open }) => !open,
        style: {
          width: 60
        }
      }
    ]
  })
)

interface SidebarProps {
  open: boolean
}

export const Sidebar = ({ open }: SidebarProps) => {
  const navigate = useNavigate()

  return (
    <SidebarDrawer
      open={open}
      variant="permanent"
      sx={{
        width: open ? 240 : 60,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: open ? 240 : 60, boxSizing: 'border-box' },
      }}
    >
      <Toolbar />
      {sidebarItems.map((sidebarItem, idx) => (
        <Box key={idx}>
          {idx > 0 && <Divider />}
          {open && sidebarItem.title && (
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
                {item.icon && (
                  <Tooltip title={!open && item.title} placement='right'>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                  </Tooltip>
                )}
                {open && <ListItemText primary={item.title} style={{ flexGrow: 1 }} />}
                {item.chip ? <Chip label={item.chip} size="small" color="primary" /> : null}
              </ListItemButton>
            ))}
          </List>
        </Box>
      ))}
    </SidebarDrawer>
  )
}