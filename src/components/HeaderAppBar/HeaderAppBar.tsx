import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { AppBar, Box, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import { useState } from 'react';
import { AppBarAvatar } from '../AppBarAvatar/AppBarAvatar';
import { NotificationsButton } from '../NotificationsButton/NotificationsButton';

export const HeaderAppBar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(true);

  return (
    <AppBar
      component="nav"
      color="default"
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar>
        <Stack direction="row" alignItems="center" gap={2}>
          <IconButton onClick={() => { setSidebarVisible(!sidebarVisible) }}>
            {sidebarVisible ? <MenuOpenIcon /> : <MenuIcon />}
          </IconButton>
          <Typography variant="h6">PrensUI</Typography>
        </Stack>

        {/* Spacing */}
        <Box sx={{ flexGrow: 1 }}></Box>

        <NotificationsButton />
        <AppBarAvatar />
      </Toolbar>
    </AppBar>
  )
}