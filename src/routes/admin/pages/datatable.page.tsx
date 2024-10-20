import { Avatar, Paper } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

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

	if (error) return <h1>Error...</h1>;

	return (
		<>
			<h1>Datatable Page</h1>
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
		</>
	)
}