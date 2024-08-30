import React, { useContext, useEffect, useState } from 'react'
import style from './ProductDetails.module.css'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import Slider from "react-slick";
import { CartContext } from '../../Context/CartContext';
import useProduct from '../../Hooks/useProduct';
import Lodaing from '../Loader/Lodaing.jsx'
import { WishlistContext } from '../../Context/WishlistContext.jsx';

export default function ProductDetails() {
    let { AddtoWishList, wishList } = useContext(WishlistContext)
  const [Loading, setLoading] = useState(false)
  let { AddToCart } = useContext(CartContext)
  let { id } = useParams()
  const [productDetails, setProductDetails] = useState({})
    let {getWishList} = useContext(WishlistContext)
  let {getCart} = useContext(CartContext)
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


const categoryName = productDetails.category?.name; 
const FilterProducts = data?.filter(product => product.category.name === categoryName)
  async function getProductDetails() {
    setLoading(true)
    let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
    setProductDetails(data.data)
    setLoading(false)
    
  }

  useEffect(() => {
    getProductDetails(id)
        getWishList()
    getCart()
  }, [id])

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

  </div>}
 { 

  <div className='container'>
     <h1 className='text-2xl p-3 font-semibold	'>Related Products</h1>

     <div className="flex flex-wrap justify-center">
      {Loading ? <Lodaing/> : FilterProducts?.map((product)=>  <div key={product.id} className=" product  px-2 py-4 max-sm:w-full max-sm:my-3 max-md:w-1/3 md:w-1/4 lg:w-1/6 ">
      <div>
        <Link to={`/productdetails/${product.id}`}>
          <img src={product.imageCover} className='w-full' alt={product.title} />
          <h2 className='text-main text-sm'>{product.category.name}</h2>
          <h2 className='font-medium'>{product.title.split(' ').slice(0, 2).join(' ')}</h2>
          <div className='flex justify-between my-3'>
            <h3>{product.price} EGP</h3>
            <h3><i className='fas fa-star rating-color'></i>{product.ratingsAverage}</h3>
          </div>
        </Link>
        <button onClick={() => AddToCart(product.id)} className='btn w-full bg-main my-2 text-white py-1 rounded '>Add to Cart</button>
      </div>

      <i onClick={() => AddtoWishList(product.id)} className={`fa-solid fa-heart ${wishList?.some((item) => item.id === product.id) ? `text-red-500` : 'text-black'} `}></i>

    </div>)}
    </div>
    </div>
  }


  </>
}
