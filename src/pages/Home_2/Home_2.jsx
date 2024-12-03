import React from 'react'
import ImageSlider from './ImageSlider';
import CustomizedTimeline from './CustomizedTimeline';
import ImageMasonry from './ImageMasonry';
import { Container } from '@mui/material';

const Home_2 = () => {
  return (
    <div className='flex justify-center'>
      <div className='w-[1024px] bg-white p-0 m-0'>
        <div className='p-0 m-0'>
          <div className="md:flex gap-4">
            <div className="md:w-3/4 border">
              <ImageSlider images={images} />
            </div>
            <div className="md:w-1/4 border">
              <div className="h-1/2 border">1</div>
              <div className="h-1/2 border">2</div>
            </div>
          </div>

          <div className="mt-4 border">
            <ImageMasonry></ImageMasonry>
          </div>

          <div className="mt-4 border">
            <CustomizedTimeline></CustomizedTimeline>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home_2;

const images = [
  "https://via.placeholder.com/600x400/FF5733/FFFFFF?text=Image+1",
  "https://via.placeholder.com/600x400/33FF57/FFFFFF?text=Image+2",
  "https://via.placeholder.com/600x400/3357FF/FFFFFF?text=Image+3",
];