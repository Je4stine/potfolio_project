import React from 'react';
import {BsFillSuitHeartFill} from 'react-icons/bs';
import {BsStarFill, BsStarHalf} from 'react-icons/bs';
import ICE from '../Assets/Images/icecream.jpg';
import {AiOutlineMenu} from 'react-icons/ai';

function FoodDetails() {
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
        <div className=' flex px-[300px] py-[100px]'>
            <div className=' flex flex-col justify-center items-center'>
                <h1 className=' font-bold text-4xl'>Beed bugger</h1>
                <div className=' flex my-10'>
                    <BsStarFill/>
                    <BsStarFill/>
                    <BsStarFill/>
                    <BsStarFill/>
                    <BsStarHalf/>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit doloribus possimus tempore fuga, quod nulla perspiciatis, ad voluptas aut architecto perferendis dolores, non laborum enim repudiandae aliquid ullam saepe veritatis?</p>
            </div>
            <img src={ICE} className=' rounded-lg ml-10'/>
        </div>
        <a href='/arview' className=' bg-blue-900 rounded-md w-[50%] h-[50px] m-auto text-white flex flex-1 justify-center items-center'> AR View</a>
    </div>
  )
}

export default FoodDetails;