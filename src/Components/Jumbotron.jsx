import React from 'react';
import Food1 from '../Assets/Images/image1.jpg';
import './Jumbotron.css'

function Jumbotron() {
  return (
    <div className='parallax'>
        <h1 className=' text-white font-bold absolute lg:top-[50%] top-[30%] text-7xl md:ml-10'>Ar based Food Recipes</h1>
        <div className=' text-white absolute lg:top-[65%] top-[80%] left-[20%] border-white border-[1px] p-5 rounded-md hover:bg-red-600'> <span>Get Started</span></div>
    </div>
  )
}

export default Jumbotron;