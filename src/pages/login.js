import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Header from "../components/Header";
import { useEffect } from "react";
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
//import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Container from '@mui/material/Container';
import { LoginAPI } from "../api";
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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
 
 

  
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
  }
  async function handleSubmit(event) {
    event.preventDefault();
    
    HandleLoginResponse(await LoginAPI({
        email: email,
        password:password,
      }));
  }       
  

  async function HandleLoginResponse(response) {
    if (response === "Invalid User name or Password") {
        alert("Invalid User name or Password")
      } else if (response === "Server Busy") {
        alert("Server Busy")
      } else if (response?.status) {
        navigate("/runner"); 
      }
 
  }
 
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
                />
              </Grid>
              
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Let's Go!
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="http://localhost:3000" variant="body2">
                  Not a registered user? Sign up!
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