import { Add } from "@mui/icons-material";
import { Avatar, Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, ListItemText, MenuItem, OutlinedInput, Paper, Select, Stack, TextField } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useQuery } from "@tanstack/react-query";
import { useSnackbar } from "notistack";
import { useState } from "react";
import { DashboardHeader } from "../../../components/DashboardHeader/DashboardHeader";

const pageSizeOption = 100;
const maxRowCount = 5000;

const fetchUsers = async (page: number) => {
 const response = await fetch(`https://randomuser.me/api/?page=${ page + 1 }&results=${ pageSizeOption }&seed=Prens`);
 const responseData = await response.json() as { [key: string]: unknown };
 // eslint-disable-next-line @typescript-eslint/ban-ts-comment
 // @ts-expect-error
 return responseData.results.map(result => {
	result.id = result.login.uuid;
	return result;
 });
}

const userColumns: GridColDef[] = [
	{
		field: "id",
	}, {
		field: "picture",
		headerName: "Photo",
		renderCell: (params) => {
			return (
				<Avatar 
					src={params.value?.medium}
				/>
			)
		}
	}, {
		field: "name",
		headerName: "Name",
		valueGetter: (params: { [key: string]: unknown }) => params?.title + " " + params?.first + " " + params?.last
	}, {
		field: "email",
		headerName: "Email",
	}, {
		field: "gender",
		headerName: "Gender"
	}, {
		field: "phone",
		headerName: "Phone Number"
	}, {
		field: "location",
		headerName: "Address",
		valueGetter: (params: { [key: string]: unknown }) => params?.city + ", " + params?.country
	}
]

export default function DatatablePage() {
	const [showAddUserDialog, setShowUserDialog] = useState(false);
	const { enqueueSnackbar } = useSnackbar()

	// const queryClient = useQueryClient();
	const [paginationModel, setPaginationModel] = useState({
		page: 0,
		pageSize: pageSizeOption
	});

	const { data, error, isLoading } = useQuery({
		queryKey: ["results", paginationModel.page],
		queryFn: () => fetchUsers(paginationModel.page),
		// keepPreviousData: true,
	});

	// Prefetch the next page
	// useEffect(() => {
	// 	queryClient.prefetchQuery({
	// 		queryKey: ["results", paginationModel.page],
	// 		queryFn: () => fetchUsers(paginationModel.page),
	// 	})
	// }, [data, paginationModel.page, queryClient])

	const handleAddUser = () => {
		setShowUserDialog(true);
	}

	const handleAddingUser = () => {
		const isSuccess = Math.floor(Math.random() * 2) === 1;
		const message = isSuccess ? "User has been added" : "There was an error in adding user";
		setTimeout(() => {
			setShowUserDialog(false);
			enqueueSnackbar(message, {
				variant: isSuccess ? "success" : "error",
				anchorOrigin: {
					vertical: "bottom",
					horizontal: "right"
				}
			})
		}, 750)
	}

	if (error) return <h1>Error...</h1>;

	return (
		<>
			<DashboardHeader title="Datatable" />

			<Stack direction="row" marginBottom={4} gap={1}>
				<TextField size="small" placeholder="Search" />
				<Select
					size="small"
          id="demo-multiple-checkbox"
          multiple
					value={["Male", "Female"]}
          // onChange={handleChange}
          input={<OutlinedInput label="Gender" />}
          renderValue={(selected) => selected.join(', ')}
        >
					<MenuItem value="male">
						<Checkbox />
						<ListItemText primary="Male" />
					</MenuItem>
					<MenuItem value="female">
						<Checkbox />
						<ListItemText primary="Female" />
					</MenuItem>
        </Select>
				<Box style={{ flexGrow: 1 }}></Box>
				<Button size="small" variant="contained" onClick={handleAddUser}>
					<Add />
					Add User
				</Button>
			</Stack>

			<Paper sx={{ height: 500, width: '100%' }}>
				<DataGrid
					loading={isLoading}
					columns={userColumns}
					rows={data}
					rowCount={maxRowCount}
					pageSizeOptions={[pageSizeOption]}
					paginationModel={paginationModel}
					paginationMode="server"
					onPaginationModelChange={setPaginationModel}
				/>
			</Paper>

			<Dialog
				fullWidth
				open={showAddUserDialog}
				maxWidth="xs"
			>
				<DialogTitle>Add User</DialogTitle>
				<DialogContent>
					<DialogContentText>
						Simulate adding user...
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button
						disabled={isLoading}
						onClick={handleAddingUser}
						variant="contained"
						autoFocus
					>Add</Button>
					<Button
						disabled={isLoading}
						onClick={() => { setShowUserDialog(false) }}
						variant="outlined"
					>Cancel</Button>
				</DialogActions>
			</Dialog>
		</>
	)
}