import React, { useContext, useEffect } from 'react'
import { WishlistContext } from '../../Context/WishlistContext'
import Lodaing from '../Loader/Lodaing.jsx'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext.jsx'

export default function WishList() {

    let {wishList , getWishList , cartLoading , RemoveFromWishList} = useContext(WishlistContext)
let {AddToCart} = useContext(CartContext)
    useEffect(()=> {
getWishList()
    },[])
    function addtoCart(id){
        AddToCart(id)
        RemoveFromWishList(id)
    }
  return<>
   
        {!wishList ? <Lodaing/> : <div className='container'>
             <div className='flex justify-center flex-wrap'>
            {wishList?.map((product , index)=>
            <div key={index} className='w-1/4 product my-15 p-3 max-sm:w-full max-md:w-1/3 md:w-1/4 lg:w-1/6'>
                <Link to={`/productdetails/${product.id}`}>
    
                <img src={product.imageCover} />
            <h2>{product.description?.split(' ')?.slice(0,2)?.join(' ') }</h2>
            </Link>

                <button onClick={()=> addtoCart(product.id)} className='btn w-full bg-main my-2 text-white py-1 rounded '>Add to Cart</button>
                <button onClick={()=> RemoveFromWishList(product.id)} className='btn w-full bg-red-600 my-2 text-white py-1 rounded '>Remove From WishList</button>

            </div>
           )}
     </div>
      </div>

 }
    





   </>

}