"use client";

import React from 'react';
import LeftSideNav from '../_components/LeftSideNav';
import { useState } from 'react';

const CalorieIntake = () => {
  const [calories , setCalories] = useState();
  const [totalCalories, setTotalCalories] = useState(0);

  const [protein , setProtein] = useState();
  const [fats , setFats] = useState();
  const [carbs , setCarbs] = useState();

function handleSum(){
  setCalorieInput(e.target.value);
}

const addCalories = () => {
  const calories = parseFloat(calorieInput);

  if (!isNaN(calories) && calories > 0) {
      setTotalCalories(totalCalories + calories);
      setCalorieInput('');
  } else {
      alert('Please enter a valid number of calories.');
  }
};

  return (
    <div className='flex'>
     <LeftSideNav/>
      <div>
        <form>
          <label>Calories</label>
          <input 
          value={calories}
          type="number"
          />

<label>protein</label>
          <input 
          value={protein}
          type="number"
          />
        
        
        <label>Carbs</label>
          <input 
          value={carbs}
          type="number"
          />
          
          <label>Fats</label>
          <input 
          value={fats}
          type="number"
          />
          <button >Submit</button>

</form>
         <div>
          Total Calories: {totalCalories}
         </div>
      </div>
    </div>
  )
}

export default CalorieIntake;