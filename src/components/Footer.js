import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/icons/logo.png';

const Footer = () => (
  <Box mt="50px" bgcolor="#FFF3F4" sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px 0'}}>
    
      <img src={Logo} alt="logo" style={{ width: '70px', height: '70px' }} />
    <Typography variant="h1" sx={{ fontSize: { lg: '28px', xs: '20px' }, fontFamily: 'Josefin Sans, sans-serif', fontWeight: '400', marginTop: '20px', marginLeft: '7px' }} textAlign="center" pb="20px">
       KEEP FARMING.....
    </Typography>
  </Box>
);

export default Footer;