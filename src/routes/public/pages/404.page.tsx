import { Button, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function PageNotFoundPage() {
    const navigate = useNavigate();

    return (
        <Stack width="100dvw" height="100dvh" alignItems="center" justifyContent="center">
            <Stack alignItems="center">
                <Typography variant="h1" mb={3}>404</Typography>
                <Typography mb={3}>Page not found</Typography>
                <Button onClick={() => { navigate("/login") }}>Back to home page</Button>
            </Stack>
        </Stack>
    )
}