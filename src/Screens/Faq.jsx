import React from 'react';
import './Faq.css';
import {AiOutlineArrowDown, AiOutlineMenu} from 'react-icons/ai'

function Faq() {
  return (
    <div className='parallax2'>
         <nav className=' z-0 flex justify-between items-center shadow-md h-[80px] sticky top-0 bg-white'>
            <a className=' font-bold ml-5 text-red-600 text-2xl' href="/">Real Foodie</a>
            <div className=' mr-10 hidden lg:inline'>
                <a className=' font-bold mr-10' href="/">Home</a>
                <a className=' mr-10 font-bold' href="/about">About</a>
                <a className=' mr-10 font-bold' href="/faqs">FAQs</a>
                
            </div>
            <a className=' mr-10 lg:hidden inline' ><AiOutlineMenu size={ 30}/></a>
        </nav>
            <div className=" absolute top-[40%] lg:left-[45%] left-[32%]">
                    <h1 className=" text-white md:text-6xl font-bold text-4xl ">FAQS</h1>
            </div>
            <div className=" absolute top-[90%] md:left-[50%] left-[40%] animate-bounce">
                      <a href="#destinations">  <AiOutlineArrowDown size={60} color="white"/></a>
            </div>
    </div>
  )
}

export default Faq;