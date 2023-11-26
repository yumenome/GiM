import React from 'react';
import { Typography, Box, Stack } from '@mui/material';

import HorizontalScrollBar from "./HorizontalScrollBar";
import Loader from './Loader';


const SimilarExercises = ({targetMuscleExercises, equipmentExercises}) => {
  return (
    <Box sx={{ mt: { lg: '100px', xs: '0px' } }}>
        <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px', fontFamily: 'Josefin Sans, sans-serif' }} fontWeight={700} color="#000" >
            SIMILAR TARGETED MUSCLE EXERCISES
        </Typography>
        <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
            {targetMuscleExercises.length !== 0 ? <HorizontalScrollBar data={targetMuscleExercises} />: <Loader />}
        </Stack>
        <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px', mt: { lg: '100px', xs: '60px' }, fontFamily: 'Josefin Sans, sans-serif' }} fontWeight={700} color="#000" >
            WITH SAME EQUIPMENTS 
        </Typography>
        <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
            {equipmentExercises.length !== 0 ? <HorizontalScrollBar data={equipmentExercises} />: <Loader />}
        </Stack>
    </Box>
  )
}

export default SimilarExercises