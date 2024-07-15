

"use client";

import React, { useState } from 'react';
import LeftSideNav from '../_components/LeftSideNav';
import RighSideBox from '../_components/RighSideBox';
import Header from '../_components/Header';
import WaterPieChart from './WaterPieChart';

const WaterIntake = () => {

  const [count, setCount] = useState(0);

  function handleClickPlus() {
    setCount(count + 1);
    if (count === 7) {
      alert("You completed 8 glasses of water");
    }
  }

  function handleClickMinus() {
    setCount(count - 1);
  }

  return (
    <div className='flex h-screen'>
      <LeftSideNav />
      <div className='flex-1'>
        <Header />
        <div className='flex '>
          <div className='flex-1'>
            <div className='grid justify-items-stretch'>
              <div className='justify-self-center mt-[5rem]'>

             
            <button onClick={handleClickPlus} className='m-2 p-2 bg-blue-500 text-white rounded'>+</button>
            {count}
            <button onClick={handleClickMinus} className='m-2 p-2 bg-blue-500 text-white rounded'>-</button>
          </div> 
          <div className='ml-[23rem] mt-20 mb-[16rem]'>
            <WaterPieChart />
          </div>
          </div>
            </div>
          <RighSideBox />
        </div>
      </div>
    </div>
  );
}

export default WaterIntake;
