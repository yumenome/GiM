import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

const ExerciseCard = ({ exercise }) => (
  <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
    <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
    <Stack direction="row">
      <Button sx={{ ml: '21px', color: '#fff', background: '#FFA9A9', fontSize: '15px', borderRadius: '20px', textTransform: 'capitalize', fontFamily: 'Josefin Sans, sans-serif'}} >
        {exercise.bodyPart}
      </Button>
      <Button sx={{ ml: '21px', color: '#fff', background: '#FCC757', fontSize: '15px', borderRadius: '20px', textTransform: 'capitalize', fontFamily: 'Josefin Sans, sans-serif'}} >
        {exercise.target}
      </Button>
    </Stack>
    <Typography ml="21px" color="#000" fontWeight="bold" sx={{ fontSize: { lg: '22px', xs: '20px', fontFamily: 'Josefin Sans, sans-serif' } }} mt="11px" pb="10px" >
      {exercise.name.toUpperCase()}
    </Typography>
  </Link>
);

export default ExerciseCard;