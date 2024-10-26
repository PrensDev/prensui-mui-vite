import { Box, LinearProgress, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import { NavigationProvider, useNavigatingContext } from "../../providers/useNavigating";

export default function AuthLayout() {
    const { isNavigating } = useNavigatingContext();

    return (
        <NavigationProvider>
            <Stack
                height="100dvh"
            >
                {isNavigating && <LinearProgress />}
                <Box
                    flexGrow={1}
                    width="100dvw"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Outlet />
                </Box>
            </Stack>
        </NavigationProvider>
    )
}