import { Button } from "@/components/ui/button";
import { Radius } from "lucide-react";
import Image from 'next/image';
import BlueStrap from "./(router)/_components/BlueStrap";
import ReqCalculator from "./(router)/_components/ReqCalculator";
import OrangeStrap from "./(router)/_components/OrangeStrap";
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <div style={{ position: 'absolute', right: '0', marginRight: '50px', marginTop: '20px' }}>
      <Link href="/Login">
      <Button style={{ backgroundColor: '#3490dc', borderColor: '#3490dc',
         color: '#ffffff',borderRadius: '34px', width: '100px', height: '40px' }}>
        Sign in
      </Button></Link>
      </div>
      
      <div className="flex "> 
        <Image src="/homepage.png" alt="Homepage Image" 
        width={750} height={500} />
        <div className="mt-[10rem] ml-10">
            Get all features for free this Summers
            <div className="mt-10 font-bold text-4xl">
            LOOSE FAT , GET FIT <br/>
            HAVE FUN !
            </div>
            <div className="mt-14 font-semibold">
            Features:
            {/* CARDS */}
            <div className="flex mt-10">
              {/* card1 */}
              <div className="ml-10 bg-slate-200 h-[18rem] w-[13rem] rounded-xl">
                <div className="font-normal text-sm mt-5 ml-5">
                  Calculate <br/> 
                  Calories
                </div>
              </div>
              {/* card2 */}
              <div  className="ml-5 bg-slate-200 h-[18rem] w-[13rem] rounded-xl">
              <div className="font-normal text-sm mt-5 ml-5">
                  Calculate <br/> 
                  Water Intake
                </div>
              </div>

            </div>
{/* Card 3 */}
            <div className="ml-10 mt-5 bg-slate-200 h-[10rem] w-[27.4rem] rounded-xl">
              <div className="font-normal text-sm pt-5 ml-5 ">
                Daily progress check
              </div>

            </div>

            </div>
        </div>
     
     

      
    </div>
    <BlueStrap/>
    <div className="mt-10">
      <span className="ml-10 text-2xl font-bold">
         Calculate required Calories
      </span>
     
      {/* text for claories  */}
      <div className="bg-blue-400 mt-10 pl-20 pr-20 pt-10 pb-10 
      text-white rounded-sm">
        <span className="text-xl font-bold">
      Understanding Caloric Needs of the Body
      <br/>
      Calories  </span>  are the units of energy that fuel our bodies' vital functions
       and activities. The number of calories each person requires daily can 
       vary widely based on several factors, including age, sex, weight, height,
        and physical activity level. Understanding these needs is crucial for
         maintaining health, supporting bodily functions, and managing weight.
      </div>
       <ReqCalculator/>
       <div className="bg-blue-300 pl-36 pr-36 text-xs mt-16 text-white pt-10 pb-10">
      <span className="text-xl font-bold ">
       Basal Metabolic Rate (BMR)</span>
       <br/>
The Basal Metabolic Rate (BMR) is the number of calories your body needs to perform basic, life-sustaining functions while at rest. These functions include breathing, circulating blood, regulating body temperature, and maintaining cell production. The BMR accounts for approximately 60-75% of the total calories burned each day.
Several formulas, such as the Harris-Benedict equation, can estimate BMR:<br/>
For men:<br/>
BMR=88.362+(13.397×weight in kg)+(4.799×height in cm)−(5.677×age in years)BMR = 88.362 + (13.397 \times \text(weight in kg)) + (4.799 \times \text(height in cm)) - (5.677 \times \text(age in years))BMR=88.362+(13.397×weight in kg)+(4.799×height in cm)−(5.677×age in years)
<br/>
For women:<br/>
BMR=447.593+(9.247×weight in kg)+(3.098×height in cm)−(4.330×age in years)BMR = 447.593 + (9.247 \times \text(weight in kg)) + (3.098 \times \text(height in cm)) - (4.330 \times \text(age in years))BMR=447.593+(9.247×weight in kg)+(3.098×height in cm)−(4.330×age in years)
      </div>
    </div>
    <OrangeStrap />
    <span className="text-xl font-bold ml-40 mt-10 inline-block">
      Workout Card
      <span className=" text-sm italic font-light">
      <br/>  COMING SOON...
      </span>
    </span>
{/* cards */}
    <div className="flex justify-center mt-10 mb-10">
      <div className="bg-slate-500 rounded-xl px-4">
        <span className="ml-20 mt-7 inline-block mb-10">HIIT Workout</span>
      <Image src="/WorkoutCard1.png" alt="Homepage Image" 
        width={480} height={436} />

      </div>
      <div className="ml-10 bg-slate-500 rounded-xl px-4">
        <span  className="ml-20 mt-7 inline-block mb-10">Muscle Building Workout</span>
      <Image src="/WorkoutCard2.png" alt="Homepage Image" 
        width={480} height={436} />

      </div>

    </div>
    <OrangeStrap/>

    <div className="flex justify-center mt-5 mb-7">

      <div className="bg-slate-200 h-[319px] w-[413px] m-2 rounded-2xl"></div>
      <div className="bg-slate-200 h-[319px] w-[413px] m-2 rounded-2xl"></div>
      <div className="bg-slate-200 h-[319px] w-[413px] m-2 rounded-2xl"></div>
      
      
      

    </div>
    
<div className="bg-blue-500 w-full p-10 pb-20 text-white">

  <span>
  © 2024 FitnessCalculator | Your Path to a Healthier Life
  </span>

  <span className="mt-10 inline-block">
    <span className="text-2xl font-semibold">
  Subscribe to Our Newsletter:</span> Stay updated with the latest fitness tips, exclusive offers, and updates directly to your inbox.
 <span className="mt-1 inline-block">Our Mission: "Empowering your fitness journey, one calculation at a time."
  </span> </span>
  <span className="font-bold mt-10 inline-block">Contact Information:</span>
  <ul>
    <li>  Email: Mridul2431@gmail.com   </li>
    <li>  Phone: +91 79864389**   </li>
  </ul>



</div>
    
  

     </div>
  );
}
