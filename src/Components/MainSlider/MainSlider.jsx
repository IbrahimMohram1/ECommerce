import React from 'react'
import Slider from "react-slick";
import slideImg1 from '../../assets/images/slider-image-3.jpeg'
import slideImg2 from '../../assets/images/slider-image-2.jpeg'
import slideImg3 from '../../assets/images/slider-image-1.jpeg'

export default function MainSlider() {
     var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:1000,
    arrows:false
  };
  return <>
  <div className="flex ">
    <div className="w-3/4  max-sm:w-full  lg:w-3/4">
        <Slider {...settings}>
  <img src={slideImg1} className=' w-full h-[400px]'/>
  <img src={slideImg2} className=' w-full h-[400px]'/>
  <img src={slideImg3} className=' w-full h-[400px]'/>
    </Slider>
    </div>
    <div className="w-1/4 max-sm:hidden lg:block">
  <img src={slideImg2} className='w-full h-[200px]'/>
  <img src={slideImg3} className='w-full h-[200px]'/>

    </div>
  </div>

  </>
}
