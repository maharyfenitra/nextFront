import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { SignUpStatusType } from "../../types/SignUpStatusType";
import Alert from "@mui/material/Alert";
import Image from "next/image";
import slogan from "../../public/slogan.svg";
import mgt from "../../public/mgt.svg";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp(prop: TProp) {
  const [value, setValue] = React.useState<Date | null>(
    new Date("2014-08-18T21:11:54")
  );

  const handleChange = (newValue: Date | null) => {
    setValue(newValue);
  };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" className="page pageSignUp" maxWidth="xs">
        <CssBaseline />
        <Box className="sign signUp card">

          <Box className="blocSlogan">
            <Box className="slogan">
              <Image src={slogan} alt="MGT" width={289} height={303} />
            </Box>
          </Box>

          <Box className="form">
            <Box className="logo-img">
              <Image src={mgt} alt="MGT" width={70} height={70} />
            </Box>

            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            
            <Box
              component="form"
              noValidate
              onSubmit={prop.handleSubmit}
              sx={{ mt: 3 }}
              className="formUp"
            >
              <Grid container spacing={2}>
                {prop.signUpStatus?.isRequiredFieldEmpty && (
                  <Grid item xs={12}>
                    <Alert severity="error">
                      Please fill all the required field
                    </Alert>
                  </Grid>
                )}
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    name="adress"
                    label="Adress"
                    type="text"
                    id="adress"
                    autoComplete="adress"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="birthDay"
                    type="date"
                    required
                    fullWidth
                    id="birthDay"
                    label="Birth day"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    name="phoneNumber"
                    label="Phone number"
                    type="text"
                    id="phoneNumber"
                    autoComplete="Phone number"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    className="last"
                  />
                </Grid>
                {prop.signUpStatus?.isConfirmationPassWordDontMatch && (
                  <Grid item xs={12}>
                    <Alert severity="error">Password don&apos;t match</Alert>
                  </Grid>
                )}
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    name="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    id="confirmPassword"
                    autoComplete="confirm password"
                    className="last veryLast"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Box className="remenForget">
                    <FormControlLabel
                      control={
                        <Checkbox value="allowExtraEmails" />
                      }
                      label="I want to receive inspiration, marketing promotions and updates via email."
                    />
                  </Box>
                </Grid>
                {prop.signUpStatus?.isCreationCompteSuccess && (
                  <Grid item xs={12}>
                    <Alert severity="success">
                      Your account was successfuly create, please checkout your
                      mail to activete it!
                    </Alert>
                  </Grid>
                )}
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                className="btn"
              >
                Sign Up
              </Button>

                <Box className="linkSign">
                  Already have an account? <Link href="/login">Sign in</Link>
                </Box>
            </Box>
          </Box>

        </Box>
          
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
type TProp = {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  signUpStatus: SignUpStatusType | null;
};
