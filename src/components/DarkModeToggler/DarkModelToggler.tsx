import BedtimeIcon from '@mui/icons-material/Bedtime';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import { IconButton, Tooltip, useColorScheme } from "@mui/material";

export default function DarkModeToggler() {
    const { mode, setMode } = useColorScheme();

    const handleToggle = () => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        mode === "light" ? setMode("dark") : setMode("light")
    }

    return (
        <Tooltip title={`Toggle ${ mode === "light" ? "Dark" : "Light" } Mode`}>
            <IconButton onClick={handleToggle}>
                {mode === "light" ? <BedtimeIcon /> : <Brightness5Icon />}
            </IconButton>
        </Tooltip>
    )
}