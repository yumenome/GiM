import { Box, Stack, Typography } from '@mui/material';

import Banner from '../assets/images/banner.png';
import g from '../assets/images/g.jpg';
import y from '../assets/images/y.jpg';
import m from '../assets/images/m.jpg';

const HeroBanner = () => (
    <Box sx={{ mt: {lg: '140px', xs: '70px'}, ml: { sm: '50px'} }} position="relative" p='20px' >
        <Typography color='#FDCC11' fontWeight='600' fontSize='46px'  fontFamily='Josefin Sans, sans-serif'>
            WELCOME TO GiM
        </Typography>
        <Typography fontWeight={700} sx={{ lg: '144px', xs: '40px'}} mb='23px' mt= '30px' fontSize='36px' fontFamily='Josefin Sans, sans-serif'>
            Sweat, Smile <br />
            & SUCCESS!
        </Typography>
        <Typography fontSize='22px' lineHeight='35px'  fontFamily='Josefin Sans, sans-serif'>
            Check out the most effective exercises personlized to you!
        </Typography>
        <Stack>
            <a href='#exercises' style={{ marginTop: '30px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FDCC00', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px', color:'black', border:'0.5px solid #333'}}>
                Explore Exercises
            </a>
        </Stack>
        <Typography fontWeight={600} color='#FF2625' sx={{ opacity: '0.2', display: { lg: 'block', xs: 'none'}, fontSize: '200px'}}  fontFamily='Josefin Sans, sans-serif'>
            EXERCISE
        </Typography>
        <img src={m} className='hero-banner-img' style={{ paddingTop: '90px', borderRadius: '30%'}}/>
    </Box>

);

export default HeroBanner