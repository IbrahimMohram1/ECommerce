import axios from "axios";
import { createContext, useState } from "react";
import toast from "react-hot-toast";

export let WishlistContext = createContext()

export default function WishListContextProvider({children}){
    let headers = {token: localStorage.getItem('userToken')}
    const [wishList, setWishList] = useState(null)
    const [cartLoading, setCartLoading] = useState(false)
 

    async function AddtoWishList(productId){
        setCartLoading(true)
        let {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/wishlist`, {productId},{headers});
        if(wishList?.some((item) => item.id === productId )){
                RemoveFromWishList(productId)
        }
                else if (wishList?.filter((item) => item.id !== productId )) {
               setCartLoading(true)
                setWishList(data.data)
                getWishList()
                toast.success(data.message)
         }
                 setCartLoading(false)
     }

       async function getWishList(){
        try {
                 setCartLoading(true)
        let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/wishlist`,{headers});
        setWishList(data.data)   
        } catch (error) {
                console.log(error);
                        setCartLoading(false)

        }
    
     }


      async function RemoveFromWishList(productId){
        setCartLoading(true)

        let {data} = await axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,{headers});
        setWishList(data.data)   
        toast.success(data.message)
        getWishList()
        setCartLoading(false)

     }

        return <WishlistContext.Provider value={{AddtoWishList , RemoveFromWishList , getWishList , cartLoading , wishList , setCartLoading }}>
            {children}
</WishlistContext.Provider>
}


