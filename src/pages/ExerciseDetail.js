import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { exerciseOptions, youtudeOption, fetchExercise } from "../utils/fetchExercises";

import SimilarExercises from '../components/SimilarExercises';
import ExerciseVideos from '../components/ExerciseVideos';
import Detail from '../components/Detail';
import Loader from '../components/Loader';

const ExerciseDetail = () => {

  const [ exerciseDetail, setExerciseDetail ] = useState({});
  const [ exerciseVideos, setExerciseVideos ] = useState([]);

  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
    const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

    const fetchExerciseData = async () => {
        const exerciseDetailData = await fetchExercise(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
        setExerciseDetail(exerciseDetailData);
        
        const exerciseVideoData = await fetchExercise(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`, youtudeOption);
        setExerciseVideos(exerciseVideoData.contents);

        const targetMuscleExercisesData = await fetchExercise(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
        setTargetMuscleExercises(targetMuscleExercisesData);

        const equipmentExercisesData = await fetchExercise(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
        setEquipmentExercises(equipmentExercisesData);
      };
      fetchExerciseData();
  },[id]);

  if (!exerciseDetail) {return <Loader />}
  else{
  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      <SimilarExercises id='exercise' targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
    </Box>
  )
}}

export default ExerciseDetail