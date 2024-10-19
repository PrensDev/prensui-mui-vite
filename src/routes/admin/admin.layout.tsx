import { AppBar, IconButton, Stack, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Stack>
                <Outlet />
            </Stack>
        </>
    )
}