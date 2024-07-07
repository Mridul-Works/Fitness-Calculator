"use client";

import React from 'react';
// import Link from 'next/link';
// import { useState , useEffect } from 'react';

const LeftSideNav = () => {

    // const [isOrange, setIsOrange] = useState(false);

    // useEffect(() => {
    //   // Check localStorage on component mount
    //   const textColorChanged = localStorage.getItem('textColorChanged') === 'true';
    //   setIsOrange(textColorChanged);
    // }, []);
  
    // const handleClick = () => {
    //   // Toggle color state
    //   setIsOrange(!isOrange);
    //   // Store state in localStorage
    //   localStorage.setItem('textColorChanged', !isOrange);
    // };
  

  return (
    <div className='bg-blue-500 w-[20rem] h-screen'>
    <div className='mt-10 ml-10'>logo</div>
{/*  bg-white text-blue-500 p-5 rounded-l-3xl */}
    <ul className='mt-[10rem] ml-20 text-white font-normal text-sm'>
      <a href="/CalorieIntake"> <li className='mt-10 p-5 hover:bg-white hover:text-blue-500 hover:rounded-l-3xl'>Calories Intake</li></a>
      <a href="/WaterIntake"><li className='mt-5 p-5 hover:bg-white hover:text-blue-500 hover:rounded-l-3xl'> Water Intake</li></a>
      <a href="/Stats"><li className='mt-5 p-5 hover:bg-white hover:text-blue-500 hover:rounded-l-3xl'>Stats </li> </a>
      <a href="/Settings"><li className='mt-[10rem] p-5 hover:bg-white hover:text-blue-500 hover:rounded-l-3xl'>Settings </li> </a>


      {/* <li className={`mt-5 p-5 ${isOrange ? 'text-orange-500' : ''}`}  onClick={handleClick}><a href="/Stats">Stats</a> </li>  */}
    </ul>

  </div>
  )
}

export default LeftSideNav;