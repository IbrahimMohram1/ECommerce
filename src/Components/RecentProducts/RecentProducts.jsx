import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ProductDetails from '../ProductDetails/ProductDetails.jsx'
import { CartContext } from '../../Context/CartContext.jsx'
import { WishlistContext } from '../../Context/WishlistContext.jsx'
import Lodaing from '../Loader/Lodaing.jsx'


export default function RecentProducts({ product }) {
  let { AddToCart } = useContext(CartContext)
  let { AddtoWishList, wishList , getWishList } = useContext(WishlistContext)

  return <>

  <div className=" product px-2 py-4 max-sm:w-full sm:my-8 max-md:w-1/3 md:w-1/4 lg:w-1/6 ">
      <div>
        <Link to={`productdetails/${product.id}`}>
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

    </div>
  
  </>
}
