import axios from "axios";
import { createContext, useState } from "react";
import toast from "react-hot-toast";

export let CartContext = createContext();
export default function CartContextProvider({ children }){
    let headers = {token: localStorage.getItem('userToken')}
    const [cartProducts, setCartProducts] = useState(null)
    const [cartLoading, setCartLoading] = useState(false)

    async function AddToCart(productId){
        try {
            setCartLoading(true)
            let {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/cart`, {productId},{headers});
            console.log(data);
            toast.success(data.message)
            setCartProducts(data)
            setCartLoading(false)

        } catch (error) {
            console.log(error);
            toast.error(data.message)
            setCartLoading(false)


        }
    }
    async function getCart(){
        try {
            setCartLoading(true)
            let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/cart`, {headers});
            console.log(data);
      
            setCartProducts(data)
            setCartLoading(false)

        } catch (error) {
            console.log(error);
            setCartLoading(false)

        }
    }
    async function UpdatProductQuntity(productId , count){
            if (count > 0) {
                     try {
            setCartLoading(true)
            let {data} = await axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{count}, {headers});
            console.log(data);
    
            setCartProducts(data)
            setCartLoading(false)
        } catch (error) {
            console.log(error);
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
            console.log(data);
    
            setCartProducts(data)
            setCartLoading(false)
        } catch (error) {
            console.log(error);
            setCartLoading(false)


        }
    }
    async function checkout(shippingAddress){
        try {
            let {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartProducts.data._id}?url=http://localhost:5173` , {shippingAddress} , {
                headers
            })
            console.log(data);
            window.location.href = data.session.url
        } catch (error) {
            console.log(error);
        }
    }

    async function clearCart(){
        try {
            setCartLoading(true)
            let {data} = await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart`,{headers});
            console.log(data);
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