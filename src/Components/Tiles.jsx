import ICE from '../Assets/Images/icecream.jpg';
import {AiOutlineHeart} from 'react-icons/ai';
import {BsFillSuitHeartFill} from 'react-icons/bs';
import {BsStarFill, BsStarHalf} from 'react-icons/bs'

const Tiles =()=>{
    return (
        <div className=' flex flex-col justify-start relative z-10 mb-10 lg:mr-10'>
            <div className=' relative'>
                <div className=' absolute left-[280px] top-2 rounded-full bg-red-600 p-2 hover:bg-red-200'>
                    <BsFillSuitHeartFill size={25} color="#fff" className=" hover:text-red-600"/>
                </div>
                <img src={ICE} alt='Ice' className=' h-[90%] rounded-md'/>
            </div>
            <h1>Chicken Katsu</h1>
            <div className=' flex'>
                <BsStarFill/>
                <BsStarFill/>
                <BsStarFill/>
                <BsStarFill/>
                <BsStarHalf/>
            </div>
        </div>
    )
};

export default Tiles;