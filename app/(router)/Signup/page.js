"use client";

import React, {useState} from 'react';




const SignUp = (props) => {
    const[username , setUsername] =useState('');
    const[name , setName] =useState('');
    const[password , setPassword] =useState('');
    const[conPassword , setConPassword] =useState('');
    const [message, setMessage] = useState('');

    const handleSubmit =(e) =>{
        e.preventDefault();
        console.log(name);
        console.log(username);
        console.log(password);
        console.log(conPassword);

        if(password == conPassword){
            setMessage("Password match!");
             
        }else{
            window.alert("did not match!");
        }

    }


  return (
    <div>
    <div>
        <span className='text-2xl font-semibold pt-20 inline-block'>Sign Up</span>


        <form className='mt-20 font-semibold'>
        <label htmlFor="Username">Username: </label>
        <br/>
    <input
    value={username}
    onChange={(e) => setUsername(e.target.value)}
      type="Username"
      id="UserName"
      className='border-b-2 w-[23rem]'          
     
    />

    <br/>
    <label htmlFor="Name">Name: </label>
        <br/>
    <input
    value={name}
    onChange={(e) => setName(e.target.value)}
      type="Name"
      id="Name"
      className='border-b-2 w-[23rem]'          
     
    />
    
    <br/>

    <div className='mt-20'>
        <label htmlFor="password" >Password: </label>
        <br/>
    <input
    value={password} onChange={(e) => setPassword(e.target.value)}
      type="password"
      id="password"
      className=' ml-1 border-b-2 w-[23rem] '          
     
    />
    <br/>
   
        <label htmlFor="password" >Confirm Password: </label>
        <br/>
    <input
    value={conPassword}
    onChange={(e) => setConPassword(e.target.value)}
      type="password"
      id="password"
      className=' ml-1 border-b-2 w-[23rem] '          
     
    />
    
 
    
    <br/>
    </div>
    <button 
    onClick={handleSubmit}
    className='mt-10 rounded-lg px-5 py-1 bg-blue-500 text-white'>Sing Up</button>
        
        {/* <span className='ml-5 font-normal text-sm'>You dont have an account yet?
            <span className='font-bold text-blue-500'> Sign Up</span></span> */}
        </form>
    </div>
</div>
  )
}

export default SignUp;