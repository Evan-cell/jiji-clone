import React from 'react'

function Products() {
  return (
    <div className='ml-[340px] -mt-[330px]'>
        <h1 className='font-bold text-xl text-gray-600 tracking-wider'>Trending Ads</h1>
        <div>
            <div className='pt-3 pb-5 rounded-md'>
                <img className='h-48 w-68 sm:h-48 sm:w-68 md:h-48 md:w-68 lg:h-48 lg:w-68 xl:h-48 xl:w-68 rounded-t-md'  src="https://pictures-kenya.jijistatic.com/54875297_MTYwMC0xMjAwLWE3MzA2MjU2MGE.webp" alt="" />
                <div className='bg-white max-w-[257px] rounded-b-md'>
                <h1 className='pt-5 pl-2 '>Toyota Voxy SV Premium 2014..</h1>
                <h1 className='text-emerald-500 pl-2'>ksh 1,995,00</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products