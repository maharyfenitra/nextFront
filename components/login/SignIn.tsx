import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "next/link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme } from "@mui/material/styles";
import CopyRight from "../CopyRight";
import Alert from "@mui/material/Alert";
import Image from "next/image";
import slogan from "../../public/slogan.svg";
import mgt from "../../public/mgt.svg";
const theme = createTheme();

export default function SignIn(prop: TProp) {
  return (
    <Container component="main" className="page pageSignIn">
      <CssBaseline />
      <Box className="sign card">
        <Box className="slogan">
          <Image src={slogan} alt="MGT" width={289} height={303} />
        </Box>

        <hr className="hr" />

        <Box className="form">
          <Box className="logo-img">
            <Image src={mgt} alt="MGT" width={70} height={70} />
          </Box>
          
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={prop.handleSubmit} noValidate>
            {prop.open && (
              <Alert severity="error">
                Error login, please checkout your password!
              </Alert>
            )}

            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              InputProps={
                {
                  //className: classes.mainInput,
                }
              }
              className="last"
            />

            <Box className="remenForget">
              <FormControlLabel
                control={<Checkbox value="remember" />}
                label="Remember me"
              />

              <Link href="#">Forgot password?</Link>
            </Box>

            <Button
              color="primary"
              type="submit"
              fullWidth
              variant="contained"
              className="btn"
            >
              Login
            </Button>

            <Box className="linkSign">
              Don&apos;t have an account?
              <Link href="/signup">Sign Up</Link>
            </Box>
          </Box>
        </Box>
      </Box>
      <CopyRight />
    </Container>
  );
}
type TProp = {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  open: boolean;
};
