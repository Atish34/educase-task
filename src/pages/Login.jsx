import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()
  return <>
      <div className="col-sm-6 offset-sm-3">
        <h1>Signin to your</h1>
        <h1>PopX account</h1>
        <h3 style={{ color: 'gray' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h3>
        <Box
          component="form"
          sx={{ '& .MuiTextField-root': { m: 1, width: '100%' } }} // Set full width
          noValidate
          autoComplete="off"
          className="d-flex flex-column"
        >
          <div className="d-flex flex-column gap-2 mt-3 w-100">
            <TextField
              id="email"
              label="Email Address"
              defaultValue="Enter email Address"
              InputLabelProps={{ style: { color: 'purple' } }}
              InputProps={{ style: { color: 'gray' } }}
              sx={{ width: '100%' }} // Match button width
            />
            <TextField
              id="password"
              label="Password"
              defaultValue="Enter password"
              InputLabelProps={{ style: { color: 'purple' } }}
              InputProps={{ style: { color: 'gray' } }}
              sx={{ width: '100%' }} // Match button width
            />
          </div>
        </Box>
        <div onClick={() => navigate('/profile')} className="d-flex flex-column">
          <button className="btn btn-lg btn-secondary">
            Login
          </button>
        </div>
      </div>
    </>
};

export default Login;
