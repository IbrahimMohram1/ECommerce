import React, { useContext, useEffect, useState } from 'react'
import style from './Brands.module.css'
import { BrandsContext } from '../../Context/BrandsContext'
import Lodaing from '../Loader/Lodaing'
import axios from 'axios'
import useProduct from '../../Hooks/useProduct'
import { Link } from 'react-router-dom'
import { WishlistContext } from '../../Context/WishlistContext'
import { CartContext } from '../../Context/CartContext'

export default function Brands() {
const [loadingBrand, setloadingBrand] = useState(false)

    let { AddtoWishList, wishList, getWishList } = useContext(WishlistContext)
  let {getCart} = useContext(CartContext)
  let {brands , getAllBrands , Loading ,  specificBrand  , specificbrand} = useContext(BrandsContext)
    let {data} = useProduct()
    useEffect(()=>{
      getWishList()
      getCart()
      getAllBrands()
      } , [])
      
const BrandName = specificbrand?.name; 
const FilterProducts = data?.filter(product => product.brand?.name === BrandName)
  return <>
    {Loading ? <Lodaing/> : <div className='container'>
<div className='flex flex-wrap justify-center items-center'>
  {brands?.map((brand)=>  
    <div key={brand._id} onClick={()=>specificBrand(brand._id)} className="w-1/6 product px-2 py-4 h-[250px] max-sm:w-1/2  max-sm:my-8 max-md:w-1/3 md:w-1/4 lg:w-1/6 sm:h-auto" >
  <div>
      <img src={brand?.image} className='w-full' alt={brand?.name} />
    <h2 className='text-main text-sm'>{brand?.name}</h2>
    <div className='flex justify-between my-3'>
    </div>
  </div>
  </div>
  )
}
   </div>
   </div>
  }
  {<div className='flex justify-center items-center'>
  
  <div className='md:w-1/3 max-sm:w-full'>
      <img src={specificbrand?.image} className='w-full' alt={specificbrand?.name} />
    <h2 className='text-main text-sm'>{specificbrand?.name}</h2>
    <div className='flex justify-between my-3'>
    </div>
  </div></div>}
  
  {  <div className='container'>
      {FilterProducts?.length > 0 &&  <h1 className='text-2xl p-3 font-semibold	'>Related Products</h1> }

    <div className='flex flex-wrap justify-center items-center justify-center'>
  {FilterProducts?.map((product) =>  <div key={product.id} className=" product  px-2 py-4 max-sm:w-full max-sm:my-3 max-md:w-1/3 md:w-1/6  ">
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
</div>}
  
  </>
}
