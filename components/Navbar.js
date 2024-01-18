import React from 'react';

function Navbar() {
  return (
    <div className='bg sticky top-0 z-50 w-full '>
      <div className='container mx-auto flex justify-between items-center border-gray-100 relative '>
        <div className=''>
          <img className='h-14 p-2' src="https://upload.wikimedia.org/wikipedia/commons/1/15/Jiji_africa.jpg" alt="" />
        </div>
        <div className='flex mr-4 items-center'>
          <div className='text-white mr-4 text-lg cursor-pointer'>Sign in | Register</div>
          <div>
            <button className='bt text-white p-1 pr-10 pl-10 text-lg rounded-md cursor-pointer'>SELL</button>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Navbar;
