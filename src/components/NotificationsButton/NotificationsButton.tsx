import NotificationsIcon from '@mui/icons-material/Notifications';
import { Badge, IconButton, Tooltip } from "@mui/material";

export const NotificationsButton = () => {
  return (
    <Tooltip title="Notifications">
      <IconButton>
        <Badge badgeContent={100} color="secondary">
          <NotificationsIcon />
        </Badge>
      </IconButton>
    </Tooltip>
  )
}