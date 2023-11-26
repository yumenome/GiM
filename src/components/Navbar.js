import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import logo from '../assets/icons/logo.png';

const Navbar = () => {
return (
<Stack direction='row' justifyContent='space-around' 
  sx={{ gap: { sm: '290px', xs: '10px'}, mt: '10px', justifyContent: 'none', px: '20px', alignItems: 'center'}} >
    <Link to="/GiM">
      <img src={logo} style={{ width: '60px', height: '60px', marginRight: '30px', marginLeft: '50px'}} />
    </Link>
    <Stack direction='row' gap='50px' alignItems='flex-end'>
      <Link to="/GiM" style={{ textDecoration: 'none', color: '#3A1212'  }}>
        HOME
      </Link>
      <a href='#exercises' style={{ textDecoration: 'none', color: '#3A1212'}}>
        EXERCISES
      </a>
    </Stack>
</Stack>
)
}

export default Navbar
