import React, { useContext, useEffect, useState } from 'react'
import style from './Categories.module.css'
import { CategoryContext } from '../../Context/CategoryContext'
import Lodaing from '../Loader/Lodaing'
import { WishlistContext } from '../../Context/WishlistContext'
import { CartContext } from '../../Context/CartContext'
import axios from 'axios'
import useProduct from '../../Hooks/useProduct'
import { Link } from 'react-router-dom'

export default function Categories() {
  let {getAllCategory , category , Loading} = useContext(CategoryContext)
    let {getCart , AddToCart} = useContext(CartContext)
  let { AddtoWishList, wishList, getWishList } = useContext(WishlistContext)
  const [LoadingCat, setLoadingCat] = useState(false)
const [specificCategory, setspecificCategory] = useState(null)

    useEffect(()=>{
      getWishList()
      getCart()
getAllCategory()
} , [])
    let {data} = useProduct()
const categoryName = specificCategory?.name; 
const FilterProducts = data?.filter(product => product.category.name === categoryName)

async function subCategory(id){
setLoadingCat(true)
  let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/categories/${id}`)
  setspecificCategory(data.data)
  setLoadingCat(false)
}
  return <> 
  {Loading ? <Lodaing/> : <div className='container'>
  
  <div className='flex flex-wrap justify-center items-center gap-2'>
  {category?.map((category)=>  
   
<div onClick={()=> subCategory(category._id)} key={category._id} className=" product my-8 p-3 lg:w-1/5 max-md:w-1/4 max-sm:w-full max-sm:my-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
  <img className="w-full h-[300px] max-sm:h-[500px]" src={category.image} alt={category.slug} />
  <div className="p-5">
    <p className="mb-3 text-main"> {category.name}.</p>
  </div>
</div>


  )
}
</div>
   </div>}

{
  <div className='container'>

    {FilterProducts?.length > 0 && <h1 className='text-2xl p-3 font-semibold	'>Related Products</h1> }

     <div className="flex flex-wrap justify-center">
      {LoadingCat ? <Lodaing/> : FilterProducts?.map((product)=>  <div key={product.id} className=" product  px-2 py-4 max-sm:w-full max-sm:my-3 max-md:w-1/3 md:w-1/4 lg:w-1/6 ">
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
