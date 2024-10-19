import { createTheme } from "@mui/material";

export const theme = createTheme({
    typography: {
        fontFamily: "Segoe UI",
    },
    palette: {
        primary: {
            light: '#a855f7',
            main: '#3f50b5',
            dark: '#002884',
            contrastText: '#fff',
        },
    },
    components: {
        MuiButtonBase: {
            defaultProps: {
                disableRipple: true,
            },
        },
        MuiButton: {
            defaultProps: {
                sx: {
                    textTransform: "none",
                    fontSize: "1rem"
                }
            }
        }
    },
})