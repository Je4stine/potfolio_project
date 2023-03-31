function getYear() {
  return new Date().getFullYear();
}

const Footer =()=>{
  return(
    <div className=" bg-black w-full h-[100px] mt-20">
      <h1 className=" text-white">All rights reserved Real Foodie &copy; {getYear()}</h1>
    </div>
  )
};

export default Footer;