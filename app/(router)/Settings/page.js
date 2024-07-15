import React from 'react';
import RighSideBox from '../_components/RighSideBox';
import LeftSideNav from '../_components/LeftSideNav';
import Header from '../_components/Header';

const Settings = () => {
  return (
    <div className='flex h-screen'>
    <LeftSideNav />
    <div className='flex-1'>
      <Header />
      <div className='flex '>
        <div className='flex-1'>
          <div className='  mb-[13.3rem] mt-10 '>
            <form className='mt-10'>
              <ul>
              <label className='font-bold ml-10'>Update Weight:</label>
              </ul>
              <input 
               className='border-slate-200 border-[2px] rounded-lg mt-5 ml-10 w-[10rem]'
              type="Updated Weight"/>

              <button className='bg-orange-400 rounded-md px-2 ml-5 text-white font-thin text-sm py-1'>Update</button>
            </form>
            <div className='h-[1px] mt-10 w-full bg-slate-200'></div>

            <form className='mt-10'>
              <ul>
              <label className='font-bold ml-10'>Update targeted calories:</label>
              </ul>
              <input 
               className='border-slate-200 border-[2px] rounded-lg mt-5 ml-10 w-[10rem]'
              type="Updated Weight"/>

              <button className='bg-orange-400 rounded-md px-2 ml-5 text-white font-thin text-sm py-1'>Update</button>
            </form>
            <div className='h-[1px] mt-10 w-full bg-slate-200'></div>

            <form className='mt-10'>
              <ul>
              <label className='font-bold ml-10'>Update targeted Water Intake:</label>
              </ul>
              <input 
               className='border-slate-200 border-[2px] rounded-lg mt-5 ml-10 w-[10rem]'
              type="Updated Weight"/>

              <button className='bg-orange-400 rounded-md px-2 ml-5 text-white font-thin text-sm py-1'>Update</button>
            </form>
            <div className='h-[1px] mt-10 w-full bg-slate-200'></div>
         

          </div>
         
        </div>
        <RighSideBox />
      </div>
    </div>
  </div>
  )
}

export default Settings;