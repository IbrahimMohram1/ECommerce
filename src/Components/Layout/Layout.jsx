import React, { useContext, useEffect, useState } from 'react'
import style from './Layout.module.css'
import Navbar from '../Navbar/Navbar.jsx'
import Footer from '../Footer/Footer.jsx'
import { Outlet, useNavigate } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext.jsx'
import { CartContext } from '../../Context/CartContext.jsx'
import { WishlistContext } from '../../Context/WishlistContext.jsx'

export default function Layout() {


  return <>
    <Navbar />
    <div className="my-20">
      <Outlet></Outlet>
    </div>
  </>
}
