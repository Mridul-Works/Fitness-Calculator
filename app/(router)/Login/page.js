"use client";

import React, { useState } from 'react';


const page = (props) => {
    const[username ,setUsername] = useState('');
    const[password ,setPassword] = useState('');

    const handleSubmit =(e) =>{
        e.preventDefault();
        console.log("Username =",username);
        console.log("password=",password);
      

        // window.location.reload();
    }
  


  return (
    <div>
        <div>
            <span className='text-2xl font-semibold pt-20 inline-block'>Login</span>


            <form className='mt-20 font-semibold'>
            <label htmlFor="Username">Username: </label>
            <br/>
        <input
        value={username} onChange={(e) =>setUsername(e.target.value)}
          type="Username"
          id="UserName"
          className='border-b-2 w-[23rem]'          
         
        />
        <br/>
        <div className='mt-20'>
            <label htmlFor="password" >Password: </label>
            <br/>
        <input
        value={password} onChange={(e) =>setPassword(e.target.value)}
          type="password"
          id="password"
          className=' ml-1 border-b-2 w-[23rem] '          
         
        /></div>
        <button
        onClick={handleSubmit}
        type="submit" className='mt-10 rounded-lg px-5 py-1 bg-blue-500 text-white'>Login</button>
            
            <span className='ml-5 font-normal text-sm'>You dont have an account yet?
           
                <span className='font-bold text-blue-500'>Sign Up   </span>
                </span>
               
            </form>
        </div>
    </div>
  )
}

export default page;