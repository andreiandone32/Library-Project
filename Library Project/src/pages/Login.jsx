import { Box, Typography, Link, TextField, Button, Alert } from "@mui/material";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/auth/AuthContext";
import { useForm } from "../hooks/useForm";

export default function () {
  const { user, login } = useAuthContext();
  const navigate = useNavigate();
  const { formValues, registerField } = useForm({
    email: "",
    password: "",
  });

  const [serverError, setServerError] = useState("");

  function onSubmit(event) {
    event.preventDefault();

    setServerError("");

    login(formValues)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        setServerError(error);
      });
  }

  return (
    <Box className="flexCenter" sx={{ mt: 12 }}>
      <Typography variant="h5">Sign In</Typography>
      <Typography variant="body1">
        or{" "}
        <Link component={NavLink} to="/">
          explore the app
        </Link>
      </Typography>
      <Box component="form" onSubmit={onSubmit} sx={{ mt: 2 }}>
        <TextField
          {...registerField("email")}
          label="Email"
          fullWidth
          margin="normal"
          type="email"
          required
        />
        <TextField
          {...registerField("password")}
          label="Password"
          fullWidth
          margin="normal"
          type="password"
          required
        />
        {serverError && <Alert severity="error">{serverError}</Alert>}
        <Button sx={{ my: 2 }} type="submit" variant="contained" fullWidth>
          Sign In
        </Button>

        <Link component={NavLink} to="/register" variant="body1">
          Don't have an account? Sign Up
        </Link>
      </Box>
    </Box>
  );
}