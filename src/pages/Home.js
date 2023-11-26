import { Box } from '@mui/material';
import { useState } from 'react';

import HeroBanner from '../components/HeroBanner';
import SearchExercise from '../components/SearchExercise';
import Exercises from '../components/Exercises';

const Home = () => {
  const [bodyPart, setBodyPart] = useState('all');
  const [exercises, setExercises] = useState([])
  console.log(bodyPart);

  return (
    <Box>
      <HeroBanner />
      <SearchExercise id="to_search_exercises"
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
          setExercises={setExercises}
      />
      <Exercises id='exercises'
          bodyPart={bodyPart}
          exercises={exercises}
          setExercises={setExercises}
      />
    </Box>
  )
}

export default Home