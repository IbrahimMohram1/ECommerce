import React, { useContext, useEffect, useState } from 'react'
import style from './Categories.module.css'
import { CategoryContext } from '../../Context/CategoryContext'
import Lodaing from '../Loader/Lodaing'

export default function Categories() {
  let {getAllCategory , category , Loading} = useContext(CategoryContext)
    useEffect(()=>{
getAllCategory()
} , [])
  return <> 
  {Loading ? <Lodaing/> : <div className='container'>
  
  <div className='flex flex-wrap justify-center items-center gap-2'>
  {category?.map((category)=>  
   

<div key={category._id} className=" product lg:w-1/5 max-md:w-1/4 max-sm:w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
  <img className="w-full h-[300px]" src={category.image} alt={category.slug} />
  <div className="p-5">
    <p className="mb-3 text-main"> {category.name}.</p>
  </div>
</div>


  )
}
</div>
   </div>}



  
  </>
}
