import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout.jsx'
import Home from './Components/Home/Home.jsx'
import Cart from './Components/Cart/Cart.jsx'
import Products from './Components/Products/Products.jsx'
import Categories from './Components/Categories/Categories.jsx'
import Brands from './Components/Brands/Brands.jsx'
import Login from './Components/Login/Login.jsx'
import Register from './Components/Register/Register.jsx'
import Notfound from './Components/Notfound/Notfound.jsx'
import UserContextProvider, { UserContext } from './Context/UserContext.jsx'
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute.jsx'
import ProductDetails from './Components/ProductDetails/ProductDetails.jsx'
import CartContextProvider, { CartContext } from './Context/CartContext.jsx'
import { Toaster } from 'react-hot-toast'
import Checkout from './Components/Checkout/Checkout.jsx'
import Allorders from './Components/Allorders/Allorders.jsx'
import WishListContextProvider, { WishlistContext } from './Context/WishlistContext.jsx'
import WishList from './Components/WishList/WishList.jsx'
import CategoryContextProvider from './Context/CategoryContext.jsx'
import BrandsContextProvider from './Context/BrandsContext.jsx'
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
import ForgetPassword from './Components/ForgetPassword/ForgetPassword.jsx'
import VeridyCode from './Components/VerifyCode/VeridyCode.jsx'
import ResetPassword from './Components/RestPassword/ResetPassword.jsx'
import { Offline, Online } from 'react-detect-offline'


let routers = createBrowserRouter([
  {path: '' , element: <Layout/>, children :[
    {index:true , element: <ProtectedRoute><Home/></ProtectedRoute>},
    {path:'cart' , element:<ProtectedRoute><Cart/> </ProtectedRoute>},
    {path:'products' , element: <ProtectedRoute><Products/></ProtectedRoute>},
    {path:'categories' , element: <ProtectedRoute><Categories/></ProtectedRoute>},
    {path:'checkout' , element: <ProtectedRoute><Checkout/></ProtectedRoute>},
    {path:'allorders' , element: <ProtectedRoute><Allorders/></ProtectedRoute>},
    {path:'brands' , element: <ProtectedRoute><Brands/></ProtectedRoute>},
    {path:'wishlist' , element: <ProtectedRoute><WishList/></ProtectedRoute>},
    {path:'productdetails/:id' , element: <ProtectedRoute><ProductDetails/></ProtectedRoute>},
    {path:'login' , element: <Login/>},
    {path:'register' , element: <Register/>},
    {path:'forgetpassword' , element: <ForgetPassword/>},
    {path:'verfiyCode' , element: <VeridyCode/>},
    {path:'restpassword' , element: <ResetPassword/>},
    {path:'*' , element: <ProtectedRoute><Notfound/></ProtectedRoute>},
  ]}
])
let query = new QueryClient()
function App() {

  return <UserContextProvider>
    
    <QueryClientProvider client={query}>
  <WishListContextProvider>
  <CartContextProvider>
 
    <CategoryContextProvider>
      <BrandsContextProvider>
   <RouterProvider router={routers}></RouterProvider>
   <Toaster />
    <Offline>
      
      <div className='bg-red-600 text-white p-4 fixed bottom-0 left-0'>Only shown offline (surprise!)</div>
      </Offline>


   </BrandsContextProvider>
   </CategoryContextProvider>
  </CartContextProvider>
  </WishListContextProvider>
</QueryClientProvider>
  </UserContextProvider>

  
  

}

export default App
