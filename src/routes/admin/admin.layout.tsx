import { Box, CssBaseline, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";
import { HeaderAppBar } from "../../components/HeaderAppBar/HeaderAppBar";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { useState } from "react";

export default function AdminLayout() {
	const [openSidebar, setOpenSidebar] = useState(true);

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<HeaderAppBar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
			<Sidebar open={openSidebar}/>
			<Box component="main" width="100%" sx={{ p: 3, flexGrow: 1 }}>
				<Toolbar />
				<Outlet />
			</Box>
		</Box>
	)
}