import React from 'react'
import jiji1 from '../assets/jiji1.png'
import jiji2 from '../assets/jiji2.png'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
function Carouselx() {
  return (
    <div className=' mx-auto mt-5  max-w-[800px] text-center '>
    
    <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={5000}
        >
            <div>
                <img loading='lazy' src='https://i.ibb.co/cNMkCGV/jiji1.png' alt="" />
            </div>
            <div>
            <img loading='lazy' src="https://i.ibb.co/FXdSnQW/jiji2.png" alt="" />
            </div>


        </Carousel>
</div>
  )
}

export default Carouselx