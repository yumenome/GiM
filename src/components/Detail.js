import React from 'react';
import { Typography, Stack, Button } from '@mui/material';

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

import Loader from './Loader';

const Detail = ({exerciseDetail}) => {

    const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail; 

    const detailImages = [
        { icon: BodyPartImage, name: bodyPart},
        { icon: TargetImage, name: target},
        { icon: EquipmentImage, name: equipment},
    ];

    
    console.log(exerciseDetail);
  return (
    <Stack gap="60px" sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
        <img src={gifUrl} loading="lazy" className="detail-image" />
        <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
            <Typography sx={{ fontSize: { lg: '64px', xs: '30px' },fontFamily: 'Josefin Sans, sans-serif' }} fontWeight={700} >
                {name ? name.toUpperCase() : <Loader />}
            </Typography>
            <Typography sx={{ fontSize: { lg: '24px', xs: '18px' },fontFamily: 'Josefin Sans, sans-serif' }} color="#4F4C4C">
                U CAN TAKE CARE OF YOURSELF! <br/>
                {name ? name.toUpperCase() : <Loader />} is one of the best exercise <br/>
                 for your {target ? target.toUpperCase() : <Loader />}. It will help you to improve   <br/>
                 your mood & gain energy. keep going...
            </Typography>
            { detailImages?.map((item) => (
                <Stack key={item.name} direction="row" gap="24px" alignItems="center">
                    <Button sx={{ background: '#FFF2DB', borderRadius: '50%', width: '100px', height: '100px' }}>
                        <img src={item.icon} style={{ width: '50px', height: '50px' }} />
                    </Button>
                    <Typography sx={{ fontSize: { lg: '30px', xs: '20px' }, fontFamily: 'Josefin Sans, sans-serif' }}>
                        {item.name}
                    </Typography>
                </Stack>
            ))}
        </Stack>
    </Stack>
  )
}

export default Detail