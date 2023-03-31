import React from 'react';
import Tiles from '../Components/Tiles';
import {AiOutlineMenu} from 'react-icons/ai';

function Dinner() {
  return (
    <div>
      <nav className=' z-0 flex justify-between items-center shadow-md h-[80px] sticky top-0 bg-white'>
            <a className=' font-bold ml-5 text-red-600 text-2xl' href="/">Real Foodie</a>
            <div className=' mr-10 hidden lg:inline'>
                <a className=' font-bold mr-10' href="/">Home</a>
                <a className=' mr-10 font-bold' href="/about">About</a>
                <a className=' mr-10 font-bold' href="/faqs">FAQs</a>
                
            </div>
            <a className=' mr-10 lg:hidden inline' ><AiOutlineMenu size={ 30}/></a>
        </nav>
        <h1 className=' text-3xl my-10 font-bold'>Dinner</h1>
      <div className=' lg:flex lg:flex-wrap justify-center items-center'>
        <Tiles/>
        <Tiles/>
        <Tiles/>
        <Tiles/>
        <Tiles/>
        <Tiles/>
        <Tiles/>
        <Tiles/>
      </div>
    </div>
  )
}

export default Dinner;