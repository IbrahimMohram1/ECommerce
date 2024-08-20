import React, { useContext, useEffect, useState } from 'react'
import style from './ProductDetails.module.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Slider from "react-slick";
import { CartContext } from '../../Context/CartContext';
import useProduct from '../../Hooks/useProduct';
import Lodaing from '../Loader/Lodaing.jsx'
export default function ProductDetails() {
  const [Loading, setLoading] = useState(false)
  let { AddToCart } = useContext(CartContext)
  let { id } = useParams()
  const [productDetails, setProductDetails] = useState({})

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false
  };
  let {data} = useProduct()

  async function getProductDetails() {
    setLoading(true)
    let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
    setProductDetails(data.data)
    setLoading(false)
    
  }

  useEffect(() => {
    getProductDetails(id)
  }, [])

  return <>
  {Loading ? <Lodaing/> :  <div className="container my-10">
 <div className="flex items-center py-10  flex-wrap">
      <div className="w-1/4 max-md:w-1/4 max-sm:w-full lg:w-1/4">
      
      {productDetails.images?.length > 1?  <Slider {...settings}>
          {productDetails.images?.map((image, index) => <img key={index} src={image} className='w-full' />)}
        </Slider> : <img src={productDetails.imageCover} className='w-full' />}

       
      </div>
      <div className="w-3/4 max-md:w-3/4 max-sm:w-full lg:w-3/4 p-6">
        <div>
          <h2>{productDetails.title}</h2>
          <p className='my-6 text-gray-600'>{productDetails.description}</p>
          <h3>{productDetails.category?.name}</h3>
          <div className='flex justify-between my-3'>
            <h3>{productDetails.price} EGP</h3>
            <h3><i className='fas fa-star rating-color'></i>{productDetails.ratingsAverage}</h3>
          </div>
          <button onClick={() => AddToCart(productDetails.id)} className='btn w-full bg-main text-white py-1 rounded '>Add to Cart</button>

        </div>
      </div>


    </div>

    {}
  </div>}
 


  </>
}
