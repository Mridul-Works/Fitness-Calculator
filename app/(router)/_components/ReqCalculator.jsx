import React from 'react'

const ReqCalculator = () => {
  return (
     <div className="flex items-center justify-center  mt-14">

  
    <div className='bg-slate-300 w-[40rem] pt-10 pb-10 rounded-xl  '>reqCalculator
      <div>
         <form className='px-16 ' action="">
            <input className='rounded-md mt-10 h-8 w-full bg-slate-200 text-white' type="number" placeholder='Age'/>
           <br /> <input className='rounded-md mt-2 h-8 w-full bg-slate-200 text-white' type="number" placeholder='Weight'/>
           <br /> <input className='rounded-md mt-2 h-8 w-full bg-slate-200 text-white' type="text" placeholder='height'/>
           <br /> <input className='rounded-md mt-2 h-8 w-full bg-slate-200 text-white' type="text" placeholder='Gender'/>
           <br /> <input className='rounded-md mt-2 h-8 w-full bg-slate-200 text-white mb-16' type="submit" />
         </form>
         <div className='rounded-md mt-2 h-8  bg-slate-200 text-slate-400 mx-16'>OUTPUT</div>
      </div>
    </div>
   </div>
)
}

export default ReqCalculator;