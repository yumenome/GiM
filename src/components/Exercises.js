import { useEffect, useState } from "react";
import { Box, Pagination, Stack, Typography } from '@mui/material';
import { exerciseOptions, fetchExercise } from "../utils/fetchExercises";

import ExerciseCard from './ExerciseCard';

const Exercises = ( { bodyPart, exercises, setExercises}) => {
  const [ currentPage, setCurrentPage ] = useState(1);
  const [exercisesPerPage] = useState(9);

  // 012345678, 91011121314151617,  (18) 1920212223242526 (27)
            // 27                       3 * 9 
  const indexOfLastExercise = currentPage * exercisesPerPage;
          // 18                                 27 - 9
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);
  console.log(currentExercises)

  const paginate = (event, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: 'smooth' });
  }

  useEffect(() => {
    const fetchExerciseData = async () => {
      let exerciseData = [];
      if(bodyPart === 'all'){
        exerciseData = await fetchExercise('https://exercisedb.p.rapidapi.com/exercises?limit=200', exerciseOptions);
      }else{
        exerciseData = await fetchExercise(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=200`, exerciseOptions);
      }
      setExercises(exerciseData);
    };
    fetchExerciseData();
  },[bodyPart]);


  return (
    <Box id='exercises' mt='50px' p='20px' >
      <Typography variant="h4" mb='50px' fontFamily='Josefin Sans, sans-serif'>
         { (bodyPart === 'all') ? 'ALL TYPES OF EXERCISES' : `${bodyPart.toUpperCase()} EXERCISES`}
      </Typography>
      <Stack direction='row' sx={{ gap: {lg: '110px', xs: '50px'}}} flexWrap='wrap' justifyContent='center'>
        {currentExercises.map((exercise, i) =>(
          <ExerciseCard key={i} exercise={exercise} />
        ))}
      </Stack>
      <Stack sx={{ mt: { lg: '114px', xs: '70px'} }} alignItems='center'>
          {exercises.length > 9 && (
            <Pagination 
                color="standard"
                shape="rounded"
                defaultPage={1}
                count={Math.ceil(exercises.length / exercisesPerPage)}
                page={currentPage}
                onChange={paginate}
                size="large"
                
            />
          )}
      </Stack>
    </Box>
  )
}

export default Exercises