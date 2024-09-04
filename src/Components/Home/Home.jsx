import React, { useContext, useEffect, useState } from 'react'
import style from './Home.module.css'
import axios, { Axios } from 'axios'
import RecentProducts from '../RecentProducts/RecentProducts.jsx'
import Lodaing from '../Loader/Lodaing.jsx'
import CategorieSlider from '../CategoriesSlider/CategorieSlider.jsx'
import MainSlider from '../MainSlider/MainSlider.jsx'
import { CartContext } from '../../Context/CartContext.jsx'
import { WishlistContext } from '../../Context/WishlistContext.jsx'
import { useQuery } from '@tanstack/react-query'
import useProduct from '../../Hooks/useProduct.jsx'

export default function Home() {
  let {getWishList} = useContext(WishlistContext)
  let {getCart} = useContext(CartContext)


let {data , isLoading} = useProduct()
  useEffect(()=>{
    getWishList()
    getCart()
  }, [])


  return <>
  <MainSlider/>
  <CategorieSlider/>
    {isLoading?   <div className='flex justify-center py-16 '><Lodaing/></div> : <div className='container'> <div className="flex flex-wrap justify-center">
    {data?.map((product , index) =>    <RecentProducts key={index} product={product} isLoading={isLoading}/> )}

    </div> </div> }
  
  
  </>
}
