"use client";

import React, { useState } from 'react';
import LeftSideNav from '../_components/LeftSideNav';
import PieChartWithCenterLabel from './PieCenterLabel';
// import { PieChart } from './PieChart';
import Header from '../_components/Header';
import RighSideBox from '../_components/RighSideBox';

const CalorieIntake = () => {
    const [calories, setCalories] = useState('');
    const [item, setItem] = useState('');
    const [protein, setProtein] = useState('');
    const [fats, setFats] = useState('');
    const [carbs, setCarbs] = useState('');
    const [totalCalories, setTotalCalories] = useState(0);

    const handleInputChange = (setter) => (e) => {
        setter(e.target.value);
    };

    const addCalories = (e) => {
        e.preventDefault();
        const caloriesToAdd = parseFloat(calories);
        if (!isNaN(caloriesToAdd) && caloriesToAdd > 0) {
            setTotalCalories(totalCalories + caloriesToAdd);
            setCalories('');
            setProtein('');
            setFats('');
            setCarbs('');
        } else {
            alert('Please enter a valid number of calories.');
        }
    };

    return (
        // <div className='flex'>
        //     <LeftSideNav />
        //     {/* <div className='h-[1px] w-full bg-black mt-14 '></div> */}
           
        <div className='flex '>
        <LeftSideNav />
        <div className='flex-1'>
          <Header />
          <div className='flex '>
            <div className='flex-1'>

            <div className='ml-[5rem] '>
                <div className='font-bold text-[2rem] mb-[2rem] mt-10'>Calculating Daily Calories Intake</div>
                <form onSubmit={addCalories}>
                <ul>
                    <label>Item</label>
                    <input 
                    className='border-[2px] ml-10  rounded-md pt-1 pb-1 mt-2 w-[8rem] border-black '
                        value={item}
                        onChange={handleInputChange(setItem)}
                        type="text"
                    /></ul>
                    <ul>
                    <label>Calories</label>
                    <input 
                    className='border-[2px] ml-3  rounded-md pt-1 pb-1 mt-2 w-[8rem] border-black '
                        value={calories}
                        onChange={handleInputChange(setCalories)}
                        type="number"
                    /></ul><ul>
                    
                    <label>Protein</label>
                    <input 
                    className='border-[2px] ml-5 rounded-md pt-1 pb-1 mt-2 w-[8rem] border-black '
                        value={protein}
                        onChange={handleInputChange(setProtein)}
                        type="number"
                    /></ul>
                    <ul>

                    <label>Carbs</label>
                    <input 
                    className='border-[2px] ml-7 rounded-md pt-1 pb-1 mt-2 w-[8rem] border-black '
                        value={carbs}
                        onChange={handleInputChange(setCarbs)}
                        type="number"
                    /></ul>
                    <ul>
                    <label>Fats</label>
                    <input 
                    className='border-[2px] ml-10 rounded-md pt-1 pb-1 mt-2 w-[8rem] border-black '
                        value={fats}
                        onChange={handleInputChange(setFats)}
                        type="number"
                    /></ul>
                    <button type="submit" className='bg-orange-500 w-[12rem] h-10 rounded-md border-[1px] ml-10 mt-10 text-white'>Submit</button>
                </form>
                <div className='mt-5 '>
                    Total Calories: {totalCalories}
                </div>
                <div className='mb-3'>
                    <PieChartWithCenterLabel />
                    {/* <PieChart /> */}
                </div>
                </div>
            </div> <RighSideBox />
            </div> 
            </div>
          
            </div>

    );
};

export default CalorieIntake;


