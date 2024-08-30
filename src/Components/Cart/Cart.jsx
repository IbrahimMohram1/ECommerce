import React, { useContext, useEffect, useState } from 'react'
import style from './Cart.module.css'
import { CartContext } from '../../Context/CartContext.jsx'
import Lodaing from '../Loader/Lodaing.jsx'
import { Link } from 'react-router-dom'

export default function Cart() {

  let {getCart , cartProducts , clearCart , UpdatProductQuntity , cartLoading , RemoveProduct} = useContext(CartContext)

      useEffect(()=> {
        getCart()
      }, [])
  return <>
    {cartLoading ? <Lodaing/> : <div className='container  max-sm:py-8'>
    {cartProducts?.numOfCartItems > 0 ? <div className='w-full mx-auto  max-sm:w-full '>
      <h1 className='my-5 text-2xl font-semibold	'>Your Cart</h1>

       <div className="relative  overflow-x-auto shadow-md sm:rounded-lg mt-15">
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 max-sm:w-full">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-6 py-3">
          Image
        </th>
        <th scope="col" className="px-6 py-3">
          Product
        </th>
        <th scope="col" className="px-6 py-3">
          Qty
        </th>
        <th scope="col" className="px-6 py-3">
          Price
        </th>
        <th scope="col" className="px-6 py-3">
          Action
        </th>
      </tr>
    </thead>
    <tbody>
      {cartProducts?.data.products.map((product)=>   <tr key={product.product.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td className="">
          <img src={product.product.imageCover} className="w-16 md:w-32 max-w-full max-h-full" alt="Apple Watch" />
        </td>
        <td className=" max-sm:px-3 py-4 font-semibold text-gray-900 dark:text-white">
          {product.product.title}
        </td>
        <td className="">
          <div className="flex items-center">
            <button onClick={()=>(UpdatProductQuntity(product.product.id , product.count-1))} className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
              <span className="sr-only">Quantity button</span>
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
              </svg>
            </button> 
            <div>
              <span>{product.count}</span>
            </div>
            <button onClick={()=>(UpdatProductQuntity(product.product.id , product.count+1))} className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
              <span className="sr-only">Quantity button</span>
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
              </svg>
            </button>
          </div>
        </td>
        <td className="px-3 py-4 font-semibold text-gray-900 dark:text-white">
          {product.price } EGP
        </td>
        <td className=" max-sm:px-2 px-6 py-4">
          <button onClick={()=>{RemoveProduct(product.product.id)}}  className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</button>
        </td>
        
      </tr>
    )
    }

    
    </tbody>

  </table>

        <div className="flex justify-around my-5">
      <h6>Total Price</h6>
      <span>{cartProducts?.data.totalCartPrice}</span>
     </div>
<div className='m-3 '>
  <button className=' w-full bg-main  text-white px-2 py-2 rounded-md'><Link to={'/checkout'}></Link> CheckOut</button>

</div>
<div className='m-3 '>
    <button className='w-full bg-red-600 text-white px-2 py-2 rounded-md' onClick={clearCart}> Clear Cart </button>
</div>


</div>  </div> : <h1 className='text-2xl fw-semibold'>No Products Added To Cart </h1>   
}
</div >
}
  </>
}
