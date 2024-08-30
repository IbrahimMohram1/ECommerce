import React, { useContext, useEffect, useState } from 'react'
import style from './Products.module.css'
import useProduct from '../../Hooks/useProduct'
import { Link } from 'react-router-dom'
import { WishlistContext } from '../../Context/WishlistContext'
import Lodaing from '../Loader/Lodaing'
import { CartContext } from '../../Context/CartContext'

export default function Products() {
  let { AddtoWishList, wishList ,cartLoading    } = useContext(WishlistContext)
let {AddToCart} = useContext(CartContext)
let {data} = useProduct()


    
  return <>
  {data && cartLoading ?<Lodaing/> : <div className='container'>
     <div className="flex flex-wrap justify-center">
      {data?.map((product)=>  <div key={product.id} className=" product px-2 py-4 max-sm:w-full max-md:w-1/3 md:w-1/4 lg:w-1/6 ">
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
    </div>  }
  

  </>
}
