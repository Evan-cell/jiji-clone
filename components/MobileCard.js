import React from 'react'
import { PlusCircleIcon,PlusIcon } from '@heroicons/react/24/outline';
function MobileCard() {
  return (
    <div className='p-10 lg:grid-cols-8 xl:hidden  sm:grid-cols-5 md:grid-cols-7 cursor-pointer grid grid-cols-3 '>
        <div className='bg-white p-5 flex flex-col max-w-32 items-center m-1'>
            <PlusIcon className='h-20 max-w-20 bg-red-500 text-white rounded-full '/>
            <h1 className='text-red-500 font-bold'>Post ad</h1>
        </div>
        <div className='bg-white p-5 flex flex-col max-w-32 items-center m-1'>
            <img src="https://assets.jijistatic.com/art/attributes/categories/vehicles.png" alt="" />
            <h1>Vehicles</h1>
        </div>
        <div className='bg-white p-5 flex flex-col max-w-32 items-center m-1'>
            <img src="https://assets.jijistatic.com/art/attributes/categories/real-estate.png" alt="" />
            <h1>Property</h1>
        </div>
        <div className='bg-white p-5 flex flex-col max-w-32 items-center m-1'>
            <img src="https://assets.jijistatic.com/art/attributes/categories/mobile.png" alt="" />
            <h1>Mobile Phones & Tablets</h1>
        </div>
        <div className='bg-white p-5 flex flex-col max-w-32 items-center m-1'>
            <img src="https://assets.jijistatic.com/art/attributes/categories/electronics.png" alt="" />
            <h1>Electronics</h1>
        </div>
        <div className='bg-white p-5 flex flex-col max-w-32 items-center m-1'>
            <img src="https://assets.jijistatic.com/art/attributes/categories/home.png" alt="" />
            <h1>Home, Furniture & Appliances</h1>
        </div>
        <div className='bg-white p-5 flex flex-col max-w-32 items-center m-1'>
            <img src="https://assets.jijistatic.com/art/attributes/categories/beauty.png" alt="" />
            <h1>Health & Beauty</h1>
        </div>
        <div className='bg-white p-5 flex flex-col max-w-32 items-center m-1'>
            <img src="https://assets.jijistatic.com/art/attributes/categories/fashion.png" alt="" />
            <h1>Fashion</h1>
        </div>
        <div className='bg-white p-5 flex flex-col max-w-32 items-center m-1'>
            <img src="https://assets.jijistatic.com/art/attributes/categories/hobbies.png" alt="" />
            <h1>Sports,Arts & Outdoors</h1>
        </div>
        <div className='bg-white p-5 flex flex-col max-w-32 items-center m-1'>
            <img src="https://assets.jijistatic.com/art/attributes/categories/jobseekers.png" alt="" />
            <h1>Seeking Work CVs</h1>
        </div>
        <div className='bg-white p-5 flex flex-col max-w-32 items-center m-1'>
            <img src="https://assets.jijistatic.com/art/attributes/categories/services.png" alt="" />
            <h1>Services</h1>
        </div>
        <div className='bg-white p-5 flex flex-col max-w-32 items-center m-1'>
            <img src="https://assets.jijistatic.com/art/attributes/categories/jobs.png" alt="" />
            <h1>Jobs</h1>
        </div>
        <div className='bg-white p-5 flex flex-col max-w-32 items-center m-1'>
            <img src="https://assets.jijistatic.com/art/attributes/categories/babies.png" alt="" />
            <h1>Babies & Kids</h1>
        </div>
        <div className='bg-white p-5 flex flex-col max-w-32 items-center m-1'>
            <img src="https://assets.jijistatic.com/art/attributes/categories/animals.png" alt="" />
            <h1>Pets</h1>
        </div>
        <div className='bg-white p-5 flex flex-col max-w-32 items-center m-1'>
            <img src="https://assets.jijistatic.com/art/attributes/categories/agriculture.png" alt="" />
            <h1>Agriculture & Food</h1>
        </div>
        <div className='bg-white p-5 flex flex-col max-w-32 items-center m-1'>
            <img src="https://assets.jijistatic.com/art/attributes/categories/equipment.png" alt="" />
            <h1>Commercial Equipment & Tools</h1>
        </div>
        <div className='bg-white p-5 flex flex-col max-w-32 items-center m-1'>
            <img src="https://assets.jijistatic.com/art/attributes/categories/repair.png" alt="" />
            <h1>Repair & Construction</h1>
        </div>
        
    </div>
  )
}

export default MobileCard