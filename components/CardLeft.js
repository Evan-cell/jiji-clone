import React from 'react'
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { PlusCircleIcon } from '@heroicons/react/24/outline';
import Carouselx from './Carouselx';
function CardLeft() {
  return ( 
    <div className='flex hidden sm:hiddden md:hidden lg:hidden xl:inline-flex absolute '>
        <div className='bg-white mt-3  ml-5 max-w-[400px]  '>
            <div className='flex items-center justify-between cursor-pointer hover:bg-gray-300'>
                <div className='p-1 flex'>
            <img className='h-12' src="https://assets.jijistatic.com/art/attributes/categories/vehicles.png" alt="" />
            <div className='ml-3'>
            <h1 className='text-gray-500'>Vehicles</h1>
            <h1 className='text text-gray-500 font-bold'>210,159 ads</h1>
            </div>
        </div>
        <ChevronRightIcon className='h-5 text-gray-700'/>
       </div>
       <div className='flex items-center justify-between cursor-pointer hover:bg-gray-300'>
       <div className='p-1 flex'>
            <img className='h-12' src="https://assets.jijistatic.com/art/attributes/categories/real-estate.png" alt="" />
            <div className='ml-3'>
            <h1 className='text-gray-500'>Property</h1>
            <h1 className='text-gray-500 font-bold'>33,085 ads</h1>
            </div>
        </div>
        <ChevronRightIcon className='h-5 text-gray-700'/>
       </div>
       <div className='flex items-center justify-between cursor-pointer hover:bg-gray-300'>
       <div className='p-1 flex'>
            <img className='h-12' src="https://assets.jijistatic.com/art/attributes/categories/mobile.png" alt="" />
            <div className='ml-3'>
            <h1 className='text-gray-500'>Mobile Phones & Tablets</h1>
            <h1 className='text-gray-500 font-bold'>72,620 ads</h1>
            </div>
        </div>
        <ChevronRightIcon className='h-5 text-gray-700'/>
       </div>
       <div className='flex items-center justify-between cursor-pointer hover:bg-gray-300'>
       <div className='p-1 flex'>
            <img className='h-12' src="https://assets.jijistatic.com/art/attributes/categories/electronics.png" alt="" />
            <div className='ml-3'>
            <h1 className='text-gray-500'>Electronics</h1>
            <h1 className='text-gray-500 font-bold'>391,620 ads</h1>
            </div>
        </div>
        <ChevronRightIcon className='h-5 text-gray-700'/>
       </div>
       <div className='flex items-center justify-between cursor-pointer hover:bg-gray-300'>
       <div className='p-1 flex'>
            <img className='h-12' src="https://assets.jijistatic.com/art/attributes/categories/home.png" alt="" />
            <div className='ml-3'>
            <h1 className='text-gray-500'>Home, Furniture & Appliances</h1>
            <h1 className='text-gray-500 font-bold'>488,886 ads</h1>
            </div>
        </div>
        <ChevronRightIcon className='h-5 text-gray-700'/>
       </div>
       <div className='flex items-center justify-between cursor-pointer hover:bg-gray-300'>
       <div className='p-1 flex'>
            <img className='h-12' src="https://assets.jijistatic.com/art/attributes/categories/beauty.png" alt="" />
            <div className='ml-3'>
            <h1 className='text-gray-500'>Health & Beauty</h1>
            <h1 className='text-gray-500 font-bold'>32,796 ads</h1>
            </div>
        </div>
        <ChevronRightIcon className='h-5 text-gray-700'/>
       </div>
       <div className='flex items-center justify-between cursor-pointer hover:bg-gray-300'>
       <div className='p-1 flex'>
            <img className='h-12' src="https://assets.jijistatic.com/art/attributes/categories/fashion.png" alt="" />
            <div className='ml-3'>
            <h1 className='text-gray-500'>Fashion</h1>
            <h1 className='text-gray-500 font-bold'>103,557 ads</h1>
            </div>
        </div>
        <ChevronRightIcon className='h-5 text-gray-700'/>
       </div>
       <div className='flex items-center justify-between cursor-pointer hover:bg-gray-300'>
       <div className='p-1 flex'>
            <img className='h-12' src="https://assets.jijistatic.com/art/attributes/categories/hobbies.png" alt="" />
            <div className='ml-3'>
            <h1 className='text-gray-500'>Sports, Arts & Outdoors</h1>
            <h1 className='text-gray-500 font-bold'>63,435 ads</h1>
            </div>
        </div>
        <ChevronRightIcon className='h-5 text-gray-700'/>
       </div>
       <div className='flex items-center justify-between cursor-pointer hover:bg-gray-300'>
       <div className='p-1 flex'>
            <img className='h-12' src="https://assets.jijistatic.com/art/attributes/categories/jobseekers.png" alt="" />
            <div className='ml-3'>
            <h1 className='text-gray-500'>Seeking Work CVs</h1>
            <h1 className='text-gray-500 font-bold'>23,435 ads</h1>
            </div>
        </div>
        <ChevronRightIcon className='h-5 text-gray-700'/>
       </div>
       <div className='flex items-center justify-between cursor-pointer hover:bg-gray-300'>
       <div className='p-1 flex'>
            <img className='h-12' src="https://assets.jijistatic.com/art/attributes/categories/services.png" alt="" />
            <div className='ml-3'>
            <h1 className='text-gray-500'>Services</h1>
            <h1 className='text-gray-500 font-bold'>38,935 ads</h1>
            </div>
             </div>
        <ChevronRightIcon className='h-5 text-gray-700'/>
            </div>


        </div>
             <div className=' ml-5'>
            <Carouselx/>
            </div>
            <div className='bt mt-3 ml-5 max-w-[300px] max-h-[220px] cursor-pointer'>
                <div className='p-2 flex flex-col'>
                <h1 className='text-lg pr-3 pl-3 font-semibold text-white '>Got something to sell?</h1>
                <PlusCircleIcon className='h-40 -mb-4  text-white'/>
                <h1 className='text-lg pr-3 pl-3 font-semibold text-white'>Post an advert for free!</h1>
                </div>
            </div>
    </div>
  )
}

export default CardLeft