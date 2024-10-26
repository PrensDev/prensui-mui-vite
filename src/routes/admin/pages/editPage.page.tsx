import { Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { DashboardHeader } from "../../../components/DashboardHeader/DashboardHeader";

export default function EditPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <>
      <DashboardHeader title={"Edit Page " + id} />
      <Button variant="contained" onClick={() => { navigate(`/page/${ id }`) }}>Back to page</Button>
    </>
  )
}