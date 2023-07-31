import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Header from "../components/Header";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
//import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Container from '@mui/material/Container';
import { SignUPAPI } from "../api";
import {
    Box,
    Button,
    TextField,
    useMediaQuery,
    Typography,
    useTheme,
  } from "@mui/material";
 


function Signin() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
 

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
 

  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
    setNameError(value.trim() === '' ? 'Name is required' : '');
  };

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
    setEmailError(!isValidEmail(value) ? 'Invalid email address' : '');
  };
  const isValidEmail = (email) => {
    // Basic email validation logic
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
    setPasswordError(value.length < 8 ? 'Password must be at least 8 characters long' : '');
  };
  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    HandleSignUpResponse(await SignUPAPI({
        name: name,
        email: email,
        password:password,
      }));
  }
  function HandleSignUpResponse(response) {
    if (response === true) {
      alert("Registration link sent to your mail id");
      navigate("/login");
    } else if (response === false) {
        alert("User already exists");
      setisVisible({
        status: "visually-true",
        message: "Already registered",
      });
    } else {
      setisVisible({
        status: "visually-true",
        message: "Server Busy",
      });
    }
    setIsLoading(false);
  }
  const [isVisible, setisVisible] = useState({
    status: "visually-hidden",
    message: "null",
  });

  return (
<>
    <Header />
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            boxShadow: 3,
            borderRadius: 2,
          px: 4,
          py: 6,
          }}
        >
          <Typography component="h1" variant="h5">
            Run!!
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={handleNameChange}
                  error={!!nameError}
                  helperText={nameError}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={email}
                  onChange={handleEmailChange}
                  error={!!emailError}
                  helperText={emailError}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={password}
        onChange={handlePasswordChange}
        error={!!passwordError}
        helperText={passwordError}
                />
              </Grid>
              
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
       
      </Container>
      </>
  );
}

export default Signin;