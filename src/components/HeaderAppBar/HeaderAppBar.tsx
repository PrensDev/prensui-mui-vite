import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { AppBar, Box, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import { AppBarAvatar } from '../AppBarAvatar/AppBarAvatar';
import DarkModeToggler from '../DarkModeToggler/DarkModelToggler';
import { NotificationsButton } from '../NotificationsButton/NotificationsButton';

export const HeaderAppBar = ({ openSidebar, setOpenSidebar}) => {
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
          <IconButton onClick={() => { setOpenSidebar(!openSidebar) }}>
            {openSidebar ? <MenuOpenIcon /> : <MenuIcon />}
          </IconButton>
          <Typography variant="h6">PrensUI</Typography>
        </Stack>

        {/* Spacing */}
        <Box sx={{ flexGrow: 1 }}></Box>

        <DarkModeToggler />
        <NotificationsButton />
        <AppBarAvatar />
      </Toolbar>
    </AppBar>
  )
}