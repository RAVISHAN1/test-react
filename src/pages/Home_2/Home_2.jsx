import React from 'react'
import ImageSlider from './ImageSlider';
import CustomizedTimeline from './CustomizedTimeline';

const Home_2 = () => {
  return (
    <div className='bg-gray-400'>

      <div className="grid grid-cols-3 grid-rows-11 gap-4">
        <div className="col-span-2 row-span-2 border">
          <ImageSlider images={images} />
        </div>
        <div className="col-span-3 row-span-2 col-start-1 row-start-3 border">
          <CustomizedTimeline></CustomizedTimeline>
        </div>
        <div className="col-start-3 row-start-1 border">3</div>
        <div className="col-start-3 row-start-2 border">4</div>
        <div className="col-span-2 row-span-3 col-start-2 row-start-5 border">5</div>
        <div className="col-start-1 row-start-5 border">6</div>
        <div className="row-start-6 border">7</div>
        <div className="row-start-7 border">8</div>
        <div className="col-span-3 row-span-2 row-start-8 border">9</div>
        <div className="col-span-2 row-start-10 border">10</div>
        <div className="col-start-3 row-start-10 border">11</div>
        <div className="col-span-3 row-start-11 border">Footer</div>
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