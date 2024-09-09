import axios from "axios";
import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";
import { WishlistContext } from "./WishlistContext.jsx";

export let CartContext = createContext();
export default function CartContextProvider({ children }){
    let headers = {token: localStorage.getItem('userToken')}
    const [cartProducts, setCartProducts] = useState(null)
    let {cartLoading , setCartLoading} = useContext(WishlistContext)

    async function AddToCart(productId){
        try {
            setCartLoading(true)
            let {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/cart`, {productId},{headers});
                        setCartLoading(false)
            toast.success(data.message)
            setCartProducts(data)

        } catch (error) {
            toast.error(data.message)
            setCartLoading(false)


        }
    }
    async function getCart(){
        try {
            setCartLoading(true)
            let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/cart`, {headers});
      
            setCartProducts(data)
            setCartLoading(false)

        } catch (error) {
            setCartLoading(false)

        }
    }
    async function UpdatProductQuntity(productId , count){
            if (count > 0) {
                     try {
            setCartLoading(true)
            let {data} = await axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{count}, {headers});
    
            setCartProducts(data)
            setCartLoading(false)
        } catch (error) {
            setCartLoading(false)

        }
            }
            else{
                RemoveProduct(productId)
            }
   
    }
    async function RemoveProduct(productId){
        try {
            setCartLoading(true)
            let {data} = await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, {headers});
    
            setCartProducts(data)
            setCartLoading(false)
        } catch (error) {
            setCartLoading(false)


        }
    }
    async function checkout(shippingAddress){
        try {
            let {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartProducts.data._id}?url=https://e-commerce-roan-phi.vercel.app/` , {shippingAddress} , {
                headers
            })
            window.location.href = data.session.url
        } catch (error) {
        }
    }

    async function clearCart(){
        try {
            setCartLoading(true)
            let {data} = await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart`,{headers});
            setCartProducts(null)
            setCartLoading(false)

        } catch (error) {
            console.log(error);
            setCartLoading(false)


        }
    }
    return <CartContext.Provider value={{AddToCart , getCart , cartProducts , setCartProducts , UpdatProductQuntity , cartLoading ,clearCart, RemoveProduct , checkout}}>
        {children}
    </CartContext.Provider>

}