import React from 'react';


function Categories({ name, Dinner}) {
  return (
    <>
    <a href='/dinner' className=' shadow-lg lg:h-1/5 lg:w-1/5 p-2 rounded-md mt-5 mx-10 bg-white'>
      <span className=' font-bold text-lg'>{name}</span>
      <img src={Dinner} alt='dinner' className=' h-1/5 w-full'/>
    </a>
    </>
  )
};

export default Categories;