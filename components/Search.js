import React from 'react';
import { MapPinIcon } from '@heroicons/react/24/solid';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

function Search() {
  return (
    <div className='bg2 h-80 flex flex-col justify-center items-center '>
      <div className='mx-auto flex'>
        <h1 className='text-white text-lg mr-2 font-bold'>Find anything in</h1>
        <span className='flex p-1 rounded-md text-white bg-black max-w-28'><MapPinIcon className='h-6'/> All Kenya</span>
      </div>
      <div className='mx-auto relative flex p-3 items-center  '>
      <input type="text" placeholder='I am looking for' className='p-5 pr-80 pl-5 rounded-l-lg border-none focus:outline-none' />
      <MagnifyingGlassIcon className='h-8 text-gray-400 absolute  right-3.5'/>
      </div>
    </div>
  );
}

export default Search;
