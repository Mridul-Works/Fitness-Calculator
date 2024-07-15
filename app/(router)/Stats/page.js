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
        <div className='flex '>
          <div className='flex-1'>
            <div className='text-center mt-[20rem] mb-[20.5rem]'>
              <h1>COMING SOON...</h1>
            </div>
           
          </div>
          <RighSideBox />
        </div>
      </div>
    </div>
  )
}

export default page;