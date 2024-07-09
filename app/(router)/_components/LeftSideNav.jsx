
"use client";

import React from 'react';

const LeftSideNav = () => {
  return (
    <div className='bg-blue-500 w-64 h-screen'>
      <div className='mt-10 ml-10'>Logo</div>
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
