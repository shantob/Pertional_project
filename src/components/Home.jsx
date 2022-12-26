import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import ME from '../assets/My image1.jpg';

const Home = () => {
  return (
    <div name='home' className='w-full h-[800px] md:h-screen  bg-[#0a192f] pt-14'>
      {/* Container */}
      <div className='w-full grid grid-cols-1 sm:grid-cols-2  gap-2  md:text-left  sm:text-center py-8 sm:py-5'>

        <div className='z-0 pt-10 mx-3 md:hover:scale-90  md:duration-500 '>
        <img className='w-85 mx-auto rounded-full border-3 bg-warm-600' src={ME} alt="ME icon" />
        </div>

        <div className='shadow-md shadow-[#040c16] max-w-[1000px] mx-auto px-5 flex flex-col  justify-center h-full'>

          <p className='text-pink-600  '>Hi, my name is</p>
          <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
            SHANTO BEPARI
          </h1>
          <h2 className='text-4xl sm:text-md font-bold text-[#8892b0]'>
            I'm a Backend Developer.
          </h2>
          <p className='text-[#8892b0] py-4 max-w-[700px]'>
            I’m a Backend developer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I’m focused on
            building responsive full-stack web applications.
          </p>
          <div>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
              View Work
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3 ' />
              </span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
