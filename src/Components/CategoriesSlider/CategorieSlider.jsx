import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";

export default function CategorieSlider() {
     var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 3,
    autoplay:true,
    autoplaySpeed:1000,
    arrows:false,
     responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
const [categories, setCategories] = useState([])

  async function getCategiores(){
    try {
          let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
  setCategories(data.data)
    } catch (error) {
    }

}

useEffect(()=>{
getCategiores()
},[])
  return <>
    <Slider {...settings}>
  {categories?.map((category , index)=> <div  key={index} className='my-4 sm:w-full '>
    <img  src={category.image} className='w-full mt-4 h-[200px]'/>
    <h3>{category.name}</h3>
  </div>)}
    </Slider>
  </>
}
