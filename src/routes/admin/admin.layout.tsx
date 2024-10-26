import { Box, CssBaseline, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";
import { HeaderAppBar } from "../../components/HeaderAppBar/HeaderAppBar";
import { Sidebar } from "../../components/Sidebar/Sidebar";

export default function AdminLayout() {
	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<HeaderAppBar />
			<Sidebar />
			<Box component="main" sx={{ p: 3 }}>
				<Toolbar />
				<Outlet />
			</Box>
		</Box>
	)
}