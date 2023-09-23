import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';

const CustomButton = styled(Button)({
  backgroundColor: '#673ab7',
  fontWeight: 'bold',
  textTransform: 'none',
  fontSize: '16px',
  color: 'white',
  '&:hover': {
    backgroundColor: '#8561c5',
    color: 'white',
  },
  borderRadius: '30px',
});

const PurpleButton = ({ children, ...props }) => {
  return <CustomButton {...props}>{children}</CustomButton>;
};

export default PurpleButton;
