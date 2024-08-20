import React, { useContext, useEffect, useState } from 'react'
import style from './Brands.module.css'
import { BrandsContext } from '../../Context/BrandsContext'
import Lodaing from '../Loader/Lodaing'

export default function Brands() {


  let {brands , getAllBrands , Loading } = useContext(BrandsContext)
    useEffect(()=>{
      getAllBrands()
    } , [])
  return <>
    {Loading ? <Lodaing/> : <div className='container'>
<div className='flex flex-wrap justify-center items-center'>
  {brands?.map((brand)=>  
    <div key={brand._id} className="w-1/6 product px-2 py-4 h-[250px] max-sm:w-full max-md:w-1/3 md:w-1/4 lg:w-1/6 sm:h-auto" >
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
  

  </>
}
