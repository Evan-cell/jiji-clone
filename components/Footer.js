import React from 'react'

function Footer() {
  return (
    <div>
    <div className="flex justify-center items-center">
      <img
        src="https://assets.jijistatic.com/static/img/footer-kenya-new.svg"
        alt=""
        className="mx-auto"
      />
    </div>
    <div className='bg3 text-white cursor-pointer'>
        <div className='grid grid-cols-2 items-center pl-20 md:grid-cols-3 lg:grid-cols-5 lg:pl-16 pt-5 lg:space-x-40 '>
            <div className='space-y-3'>
                <h1 className='text-black'>About us</h1>
                <h1> About jiji</h1>
                <h1>Terms & Conditions</h1>
                <h1>Privacy Policy</h1>
                <h1>Billing Policy</h1>
                <h1> Copyright Infrigment Policy</h1>
            </div>
            <div className='space-y-3'>
                <h1 className='text-black'> Support </h1>
                <h1>support@jiji.co.ke</h1>
                <h1>Safety tips</h1>
                <h1>Contact Us</h1>
                <h1>FAQ</h1>
            </div>
            <div className='space-y-3'>
                <h1 className='text-black'> Our apps</h1>
                <img src="https://assets.jijistatic.com/static/img/single-images/app-store.svg" alt="" />
                <img src="https://assets.jijistatic.com/static/img/single-images/google-play.svg" alt="" />
            </div>
            <div className='space-y-3'>
                <h1 className='text-black'> Our resources</h1>
                <h1>Jiji on FB</h1>
                <h1>Our Instagram</h1>
                <h1>Our Youtube</h1>
                <h1>Our Twitter</h1>
            </div>
            <div className='space-y-3'>
                <h1 className='text-black'>Hot Links</h1>
                <h1> Brand</h1>
                <h1>Regions</h1>
                <h1> Jiji Africa</h1>
            </div>
        </div>
        <div>
        <div className='flex justify-center items-center space-x-2'>
            <img className='h-10  rounded-full' src="https://assets.jijistatic.com/static/img/footer-anchors/nigeria.svg" alt="" />
            <img className='h-10 rounded-full' src="https://assets.jijistatic.com/static/img/footer-anchors/uganda.svg" alt="" />
            <img className='h-10 rounded-full' src="https://assets.jijistatic.com/static/img/footer-anchors/tanzania.svg" alt="" />
            <img className='h-10 rounded-full' src="https://assets.jijistatic.com/static/img/footer-anchors/ghana.svg" alt="" />
            <img className='h-10 rounded-full' src="https://assets.jijistatic.com/static/img/footer-anchors/ethiopia.svg" alt="" />
            <img className='h-10 rounded-full' src="https://assets.jijistatic.com/static/img/footer-anchors/senegal.svg" alt="" />
            <img className='h-10 rounded-full' src="https://assets.jijistatic.com/static/img/footer-anchors/civ.svg" alt="" />
            <img className='h-10 rounded-full' src="https://assets.jijistatic.com/static/img/footer-anchors/bangladesh.svg" alt="" />
            <img className='h-10 rounded-full' src="https://assets.jijistatic.com/static/img/footer-anchors/srilanka.svg" alt="" />
        </div>
        <h1 className='flex justify-center items-center'>@ 2024 jiji.co.ke</h1>
        </div>
        </div>
    </div>
  )
}

export default Footer