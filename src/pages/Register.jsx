import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Register = () => {
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
          sx={{ '& .MuiTextField-root': { m: 1, width: '100%' } }} 
          noValidate
          autoComplete="off"
          className="d-flex flex-column"
        >
          <div className="d-flex flex-column gap-2 mt-3 w-100">
            <TextField
            required
              id="Full Name"
              label="Full Name"
              defaultValue="Marry Doe"
              InputLabelProps={{ style: { color: 'purple' } }}
              sx={{ width: '100%' }} // Match button width
            />
            <TextField
             required
              id="Phone Number"
              label="Phone Number"
              defaultValue="Marry Doe"
              InputLabelProps={{ style: { color: 'purple' } }}
              sx={{ width: '100%' }} // Match button width
            />
            <TextField
             required
              id="email"
              label="Email Address"
              defaultValue="Marry Doe"
              InputLabelProps={{ style: { color: 'purple' } }}
              sx={{ width: '100%' }} // Match button width
            />
            <TextField
             required
              id="password"
              label="Password"
              defaultValue="Marry Doe"
              InputLabelProps={{ style: { color: 'purple' } }}
              sx={{ width: '100%' }} // Match button width
            />
            <TextField
              id="Company name"
              label="Company name"
              defaultValue="Marry Doe"
              InputLabelProps={{ style: { color: 'purple' } }}
              sx={{ width: '100%' }} // Match button width
            />
          </div>
        </Box>

        <FormControl>
         <FormLabel id="demo-radio-buttons-group-label">Are you an Agency?*</FormLabel>
         <RadioGroup
           row  
           aria-labelledby="agency-label"
           defaultValue="Yes"  
           name="agency-radio-group"
         >
           <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
           <FormControlLabel value="No" control={<Radio />} label="No" />
         </RadioGroup>
        </FormControl>

        <div className="d-flex justify-content-center">
          <button onClick={() => navigate('/profile')} className="btn btn-lg btn-primary">
            Create Account
          </button>
        </div>
      </div>
    </>
};

export default Register;
