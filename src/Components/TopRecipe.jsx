import React from 'react';
import Tiles from './Tiles';

function TopRecipe() {
  return (
    <div className=' p-10 m-auto'>
      <h1 className=' font-bold lg:text-3xl mb-6 text-2xl'> Just for you</h1>
      <div className=' lg:flex-row flex flex-col items-center lg:flex-wrap justify-center'>
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
};

export default TopRecipe;