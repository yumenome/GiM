import { Stack, Typography } from '@mui/material';

import all from '../assets/parts/all.png';
import arm from '../assets/parts/arm.png';
import arm2 from '../assets/parts/arm2.png';
import chest from '../assets/parts/chest.png';
import back from '../assets/parts/back.png';
import cardio from '../assets/parts/cardio.png';
import leg from '../assets/parts/leg.png';
import leg2 from '../assets/parts/leg2.png';
import legs from '../assets/parts/legs.png';
import waist from '../assets/parts/waist.png';
import neck from '../assets/parts/neck.png';
import shoulder from '../assets/parts/shoulder.png';

const BodyPart = ({item, bodyPart, setBodyPart}) => (
    // consol.log(item)
    <Stack
        type='button'
        alignItems='center'
        justifyContent='center'
        className='bodyPart-card'
        sx={{
            borderBottom: bodyPart === item ? '3px solid #ff2625' : '',
            backgroundColor: '#fff',
            width: '220px',
            height: '250px',
            cursor: 'pointer',
            gap: '47px',
        }}
        onClick = {() => {
            setBodyPart(item);
            window.scrollTo({top:1800, left: 100, behaviour: 'smooth'});
        }}
    >
        <img src={item === 'all' && all || 
                  item === 'back' && back ||
                  item === 'cardio' && cardio ||
                  item === 'chest' && chest ||
                  item === 'lower arms' && arm ||
                  item === 'upper arms' && arm2 ||
                  item === 'lower legs' && leg2 ||
                  item === 'upper legs' && legs ||
                  item === 'neck' && neck ||
                  item === 'shoulders' && shoulder ||
                  item === 'waist' && waist 
                } style={{ width: '50px', height: '50px'}} />
        <Typography fontSize='18px' fontWeight='bold' color='#3a1212'  fontFamily='Josefin Sans, sans-serif'>
            {item.toUpperCase()}
        </Typography>
    </Stack>
  )


export default BodyPart