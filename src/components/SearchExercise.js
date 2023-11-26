import { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

import { exerciseOptions, fetchExercise } from "../utils/fetchExercises";
import HorizontalScrollBar from "./HorizontalScrollBar";


const SearchExercise = ({ setExercises, setBodyPart, bodyPart}) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExerciseData = async () => {
      const bodyPartsData = await fetchExercise('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
      setBodyParts(['all', ...bodyPartsData]);
    };

    fetchExerciseData();
  },[]);

  const handleSearch = async () => {
    if (search) {
      // https://v2.exercisedb.io/exercises?offset=0&limit=10
      const exercisesData = await fetchExercise(`https://exercisedb.p.rapidapi.com/exercises?limit=200`, exerciseOptions);
      console.log(exercisesData)

      const searchedExercises = exercisesData.filter(
        (item) => item.name.toLowerCase().includes(search)
               || item.target.toLowerCase().includes(search)
               || item.equipment.toLowerCase().includes(search)
               || item.bodyPart.toLowerCase().includes(search),
      );
      console.log(searchedExercises);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

      setSearch('');
      setExercises(searchedExercises);
    }
  };

  return (
    <Stack alignContent='center' justifyContent='center' p='20px'  >
      <Typography fontWeight={700} sx={{ fontSize: {lg: '45px', xs: '40px'} }} mb='50px' textAlign='center'  fontFamily='Josefin Sans, sans-serif'>
          Awsome Exercises U should know
      </Typography>
      <Box position='relative' mb='70px' mx='auto' sx={{width: { lg: '1100px', xs: '350px'}}} display='flex' justifyContent='center' >
        <TextField 
          height='76px' 
          sx={{ input: { fontWeight: '400', border: 'none', borderRadius: '5px',fontFamily: 'Josefin Sans, sans-serif'}, width: '100%', backgroundColor: '#fff', borderRadius: '30px', }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="search now..."
          type="text" 
        />
          
        <Button className="search-btn" sx={{ bgcolor: '#FF2625', color: '#fff', textTransform: 'none', width: { lg: '173px', xs: '80px'}, height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px'}, fontFamily: 'Josefin Sans, sans-serif' }} onClick={handleSearch} >
          SEARCH
        </Button>
      </Box>
      <Box sx={{ position: 'relative', width: '100%', p: '20px'}}>
        <HorizontalScrollBar data={bodyParts} setBodyPart={setBodyPart} bodyPart={bodyPart} isBodyParts />
      </Box>
    </Stack>
  )
}

export default SearchExercise