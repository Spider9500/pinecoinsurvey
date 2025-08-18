import React from 'react';
import { TextField } from '@mui/material';
import { neonStyles } from '../styles/authStyles';

const NeonInput = ({ label, type = 'text', fullWidth = true, ...props }) => {
  return (
    <TextField
      label={label}
      type={type}
      fullWidth={fullWidth}
      variant="outlined"
      sx={{
        ...neonStyles.neonInput,
        marginBottom: 2,
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: '#00B140',
            borderWidth: 2,
          },
          '&:hover fieldset': {
            borderColor: '#00FF00',
            borderWidth: 2,
          },
          '&.Mui-focused fieldset': {
            borderColor: '#00FF00',
            borderWidth: 2,
            boxShadow: '0 0 15px rgba(0, 255, 0, 0.5)',
          },
        },
        '& .MuiInputLabel-root': {
          color: '#00B140',
          '&.Mui-focused': {
            color: '#00FF00',
          },
        },
      }}
      InputProps={{
        style: {
          color: '#ffffff',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
        },
      }}
      InputLabelProps={{
        style: {
          color: '#00B140',
        },
      }}
      {...props}
    />
  );
};

export default NeonInput;
