import React from 'react';
import Jumbotron from '../Components/Jumbotron';
import {AiOutlineMenu} from 'react-icons/ai'
import Categories from '../Components/Categories';
import TopRecipe from '../Components/TopRecipe';
import Footer from '../Components/Footer';
import Dinner from '../Assets/Images/dinner.jpg';
import Lunch from '../Assets/Images/lunch.png';
import Picnic from '../Assets/Images/picnic.png';
import Snack from '../Assets/Images/snack.png';
import Breakfast from '../Assets/Images/breakfast.png'

function Home() {
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
        <Jumbotron/>
        <h1 className=' font-bold lg:text-4xl text-xl my-10'>Categories</h1>
        <div className=' lg:flex'>
            <Categories name='Dinner' Dinner={Dinner}/>
            <Categories name='Lunch' Dinner={Lunch}/>
            <Categories name="Breakfast" Dinner={Breakfast}/>
            <Categories name="Picnic" Dinner={Picnic}/>
            <Categories name=" Snacks" Dinner={Snack}/>
        </div>
       <TopRecipe/>
       <Footer/>
    </div>
  )
}

export default Home;