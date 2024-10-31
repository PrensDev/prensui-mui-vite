import { Avatar, Stack, Table, TableBody, TableCell, TableRow, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { DashboardHeader } from "../../../components/DashboardHeader/DashboardHeader";


const fetchUserDetails = async (id: string | undefined) => {
	const response = await fetch(`https://randomuser.me/api/?id=${id}&seed=Prens`);
	const responseData = await response.json() as { [key: string]: unknown };
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
	return responseData?.results[0];
}

export default function UserDetailsPage () {
  const { id } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['user', id],
    queryFn: () => fetchUserDetails(id)
  })

  if (isLoading) return (<Typography>Loading...</Typography>)
  if (isError) return (<Typography>Error occured</Typography>)

  return (
    <>
      <DashboardHeader title="User Details" />

      <Table>
        <TableBody>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>{ data.id.value }</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>
              <Stack direction="row" alignItems="center" gap={1}>
                <Avatar src={data.picture.large} />
                <Typography>{ data.name.first + " " + data.name.last }</Typography>
              </Stack>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Gender</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>{ data.gender }</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Email</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>{ data.email }</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Contact Number</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>{ data.phone } / { data.cell }</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  )
}