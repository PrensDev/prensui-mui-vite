import { Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { DashboardHeader } from "../../../components/DashboardHeader/DashboardHeader";

export default function PageTemplate() {
  const { id } = useParams();
  const navigate = useNavigate()

  return (
    <>
      <DashboardHeader title={"Page " + id} />
      <Button variant="contained" onClick={() => { navigate(`/page/${ id }/edit`) }}>Edit page</Button>
    </>
  )
}