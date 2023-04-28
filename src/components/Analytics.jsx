import React from 'react';

import Laptop from '../assets/Laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4' id="company">
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>

        <img className='w-[500px] mx-auto my-4' src={Laptop} alt="Laptop Image" />

        <div className='flex flex-col justify-center text-left'>
            <p className='text-[#00df9a] uppercase font-bold'>Data Analytics Dasboard</p>
            <h1 className='md:text-3xl sm:text-2xl text-xl font-bold py-2'>Manage Data Analytics Centrally</h1>

            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi quidem voluptatibus omnis, voluptas excepturi laborum similique nulla libero impedit illo aperiam ea sapiente autem harum possimus quisquam rem consequatur? Ad ex tempora aperiam incidunt quisquam veniam neque assumenda officia animi?</p>

            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:ml-0 py-3 text-black border-2 border-white hover:bg-white hover:text-[#00df9a] hover:border-[#00df9a] transition-all duration-200 ease-in-out'>Get Started</button>

        </div>

      </div>
    </div>
  );
}

export default Analytics;
