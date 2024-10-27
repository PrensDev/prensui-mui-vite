import { createTheme } from "@mui/material";

export const theme = createTheme({
    cssVariables: {
        colorSchemeSelector: 'data-toolpad-color-scheme',
    },
    colorSchemes: {
        light: true,
        dark: true
    },
    typography: {
        fontFamily: "Segoe UI",
    },
    palette: {
        primary: {
            light: '#3f50b5',
            main: '#3f50b5',
            dark: '#002884',
            contrastText: '#fff',
        },
    },
    components: {
        MuiButtonBase: {
            defaultProps: {
                // disableRipple: true,
            },
        },
        MuiButton: {
            defaultProps: {
                sx: {
                    textTransform: "none",
                    fontSize: "1rem"
                }
            }
        },
        MuiTooltip: {
            defaultProps: {
                enterDelay: 750,
                slotProps: {
                    popper: {
                        modifiers: [
                            {
                                name: 'offset',
                                options: {
                                    offset: [0, -8],
                                },
                            },
                        ],
                    },
                }
            }
        },
    },
})