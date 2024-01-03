import React from 'react';

function Navbar() {
  return (
    <div className='bg relative'>
      <div className='flex justify-between items-center  border-gray-100 relative'>
        <div className=''>
          <img className='h-14 p-2' src="https://upload.wikimedia.org/wikipedia/commons/1/15/Jiji_africa.jpg" alt="" />
        </div>
        <div className='flex mr-4 items-center'>
          <div className='text-white mr-4 text-lg'>Sign in | Register</div>
          <div>
            <button className='bt text-white p-2 pr-10 pl-10 text-lg rounded-md'>SELL</button>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-1 bg-gray-200 opacity-10"></div>
      </div>
    </div>
  );
}

export default Navbar;
