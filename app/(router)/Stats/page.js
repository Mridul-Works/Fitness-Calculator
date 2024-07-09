import React from 'react';
import LeftSideNav from '../_components/LeftSideNav';
import Header from '../_components/Header';
import RighSideBox from '../_components/RighSideBox';

const page = () => {
  return (
   
    <div className='flex h-screen'>
      <LeftSideNav />
      <div className='flex-1'>
        <Header />
        <div className='flex p-4'>
          <div className='flex-1'>
           <h1>Stats</h1>
          </div>
          <RighSideBox />
        </div>
      </div>
    </div>
  )
}

export default page;