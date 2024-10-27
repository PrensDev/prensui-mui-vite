import { Logout } from "@mui/icons-material";
import { Avatar, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, IconButton, ListItemIcon, Menu, MenuItem, Tooltip } from "@mui/material";
import { Dispatch, Fragment, SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";

const userProfileMenuItems = [
  {
    title: "Profile",
    icon: null
  }, {
    title: "Settings",
    icon: null
  }, {
    isDivider: true
  }, {
    title: "Log out",
    icon: <Logout fontSize="small" />
  }
]

interface LogoutDialogProps {
  open: boolean,
  setOpen: Dispatch<SetStateAction<boolean>>
}

const LogoutDialog = (props: LogoutDialogProps) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const handleClose = () => {
    props.setOpen(false)
  }

  const handleConfirm = () => {
    setIsLoading(true);
    setTimeout(() => {
      navigate("/login");
      setIsLoading(false);
    }, 3000);
  }

  return (
    <Dialog
      fullWidth
      open={props.open}
      onClose={handleClose}
      maxWidth="xs"
    >
      <DialogTitle>Log out</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure you want to log out?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          disabled={isLoading}
          onClick={handleConfirm}
          variant="contained"
          autoFocus
        >Yes</Button>
        <Button
          disabled={isLoading}
          onClick={handleClose}
          variant="outlined"
        >No</Button>
      </DialogActions>
    </Dialog>
  )
}

export const AppBarAvatar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openLogoutDialog, setOpenLogoutDialog] = useState(false);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  const handleMenuItemPress = (title: string) => {
    switch (title) {
      case "Log out":
        setOpenLogoutDialog(true);
        break;
      default:
        break;
    }
    handleClose()
  }

  return (
    <Fragment>
      <Tooltip title="User Profile">
        <IconButton onClick={handleOpen}>
          <Avatar src="https://randomuser.me/api/portraits/men/41.jpg" />
        </IconButton>
      </Tooltip>

      <Menu
        keepMounted
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {userProfileMenuItems.map(({ title, icon, isDivider }, idx) => (
          <>
            {isDivider ? <Divider key={idx.toString()} /> : (
              <MenuItem key={title} onClick={() => handleMenuItemPress(title as string)}>
                {icon && (
                  <ListItemIcon>
                    {icon}
                  </ListItemIcon>
                )}
                {title}
              </MenuItem>
            )}
          </>
        ))}
      </Menu>

      <LogoutDialog open={openLogoutDialog} setOpen={setOpenLogoutDialog} />
    </Fragment>
  )
}