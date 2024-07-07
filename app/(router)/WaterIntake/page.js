"use client";

import React, { useState } from 'react';
import LeftSideNav from '../_components/LeftSideNav';
import RighSideBox from '../_components/RighSideBox';

const WaterIntake = () => {

  const [count , setCount] = useState(0);

  function handleClickPlus() {
    setCount (count +1);
    if (count === 7){
      alert(" You COmpleted 8 Glasses of water")
    }
  }
  function handleClickMinus() {
    setCount (count -1);
  }

  return (
    <div className='flex'>
        <LeftSideNav/>

        
            <div className='h-[1px] w-full bg-black mt-14'> 
                <div className='flex'>  <div>
                  <button onClick={handleClickPlus} >+</button>
                  {count}
                  <button onClick={handleClickMinus} >-</button>
                </div>
                <RighSideBox/>   </div>
                

            
        </div>
    </div>
  )
}

export default WaterIntake;