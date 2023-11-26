import React from 'react';
import { Typography, Box, Stack } from '@mui/material';
import Loader from './Loader';


const ExerciseVideos = ({ exerciseVideos, name }) => {

    if (!exerciseVideos.length) return <Loader />;
  return (
    <Box sx={{ marginTop: { lg: '30px', xs: '20px' } }} p="20px">
        <Typography sx={{ fontSize: { lg: '44px', xs: '25px' },fontFamily: 'Josefin Sans, sans-serif' }} fontWeight={700} color="#000" mb="33px">
            watch <span  style={{ color: '#FF2625' }}>{name.toUpperCase()}</span> exercise videos
        </Typography>
        <Stack  sx={{ flexDirection: { lg: 'row' }, gap: { lg: '110px', xs: '0px' } }} justifyContent="center" flexWrap="wrap" alignItems="center">
            { exerciseVideos?.slice(0,3)?.map((item, index) => (
                <a
                    key={index}
                    className='exercise-video'
                    href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                    target='_blank' 
                    rel='noreferrer'
                >
                    <img src={item.video.thumbnails[0].url} style={{ borderRadius: '10px' }} />
                    <Box>
                        <Typography sx={{ fontSize: { lg: '25px', xs: '18px' }, fontFamily: 'Josefin Sans, sans-serif' }} fontWeight={600} color="#000">
                            {item.video.title}
                        </Typography>
                        <Typography fontSize='14px' color='#000' sx={{fontFamily: 'Josefin Sans, sans-serif'}}>
                            {item.video.channelName}
                        </Typography>
                    </Box>
                </a>
            ))}
        </Stack>
    </Box>
  );
}

export default ExerciseVideos