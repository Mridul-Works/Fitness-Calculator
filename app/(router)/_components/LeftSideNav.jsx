
"use client";

import React from 'react';
import Image from 'next/image';

const LeftSideNav = () => {
  return (
    <div className='bg-blue-500 w-64 '>
   
      <div className='mt-10 ml-10 text-white inline-flex items-center'>
  <Image src="/fitness_center.png" alt="Homepage Image" width={30} height={30} />
  <div className='ml-2'>
    <div className='block mb-0 font-semibold'>Fitness</div>
    <div className='block mt-[-0.5rem]'>Center</div>
  </div>
</div>
      <ul className='mt-40 ml-10 text-white font-normal text-sm'>
        <a href="/CalorieIntake">
          <li className='mt-10 p-5 hover:bg-white hover:text-blue-500 hover:rounded-l-3xl'>Calories Intake</li>
        </a>
        <a href="/WaterIntake">
          <li className='mt-5 p-5 hover:bg-white hover:text-blue-500 hover:rounded-l-3xl'>Water Intake</li>
        </a>
        <a href="/Stats">
          <li className='mt-5 p-5 hover:bg-white hover:text-blue-500 hover:rounded-l-3xl'>Stats</li>
        </a>
        <a href="/Settings">
          <li className='mt-40 p-5 hover:bg-white hover:text-blue-500 hover:rounded-l-3xl'>Settings</li>
        </a>
      </ul>
    </div>
  );
}

export default LeftSideNav;
