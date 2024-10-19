import { AccountCircle, Lock } from "@mui/icons-material";
import { Alert, Button, Checkbox, CircularProgress, Divider, FormControlLabel, FormGroup, Grid2, InputAdornment, Link, Stack, TextField } from "@mui/material";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleIcon } from "../../../components/GoogleIcon/GoogleIcon";
import useFormValidation from "../../../hooks/useFormValidation";

export default function LoginPage() {
  const navigate = useNavigate();
  const [alertMessage, setAlertMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const form = useFormValidation({
    initialValues: {
      username: "",
      password: ""
    },
    validate: {
      username: (value) => {
        if (!value) return "Username is required";
        if (/^\d+/g.test(String(value))) return "Invalid username"
      },
      password: (value) => {
        if (!value) return "Password is required"
      }
    }
  })

  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    form.onSubmit(values => {
      setSubmitting(true);
      setTimeout(() => {
        if (values.username === "admin" && values.password === "admin") {
          navigate("/dashboard");
        } else {
          setAlertMessage("Invalid credentials");
        }
        setSubmitting(false);
      }, 3500)
    })
  }

  return (
    <Stack bgcolor="#fff" borderRadius={2} padding="16px" border="solid #ccc 1px">
      <form onSubmit={onFormSubmit}>
        <Stack gap={2} width="400px">
          <span
            style={{
              fontSize: "20px",
              fontWeight: "800",
              textAlign: "center",
              padding: "16px"
            }}
          >Log in</span>

          {alertMessage && !submitting && (
            <Alert 
              severity="warning" 
              onClose={() => {setAlertMessage("")}}
            >{alertMessage}</Alert>
          )}

          <TextField
            label="Username"
            variant="outlined"
            disabled={submitting}
            {...form.get("username")}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              },
            }}
          />

          <TextField
            label="Password"
            variant="outlined"
            type="password"
            disabled={submitting}
            {...form.get("password")}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock />
                  </InputAdornment>
                ),
              },
            }}
          />

          <Grid2 container justifyContent="space-between" alignItems="center">
            <FormGroup>
              <FormControlLabel
                control={(
                  <Checkbox disabled={submitting}/>
                )}
                label="Remember me"
              />
            </FormGroup>
            <Link href="#">Forgot your password?</Link>
          </Grid2>

          <Button
            disabled={submitting}
            variant="contained"
            type="submit"
            startIcon={submitting && <CircularProgress color="inherit" size={20} />}
          >Log In</Button>

          <Divider>OR</Divider>

          <Button
            variant="outlined"
            type="submit"
            startIcon={<GoogleIcon />}
            disabled={submitting}
          >Sign in with Google</Button>


        </Stack>
      </form>
    </Stack>
  )
}