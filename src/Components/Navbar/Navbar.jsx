import React, { useContext, useState } from 'react'
import style from './Navbar.module.css'
import logo from '../../assets/images/freshcart-logo.svg'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext.jsx'
import { CartContext } from '../../Context/CartContext.jsx'
import { WishlistContext } from '../../Context/WishlistContext.jsx'


export default function Navbar() {
    const [openModal, setOpenModal] = useState(false)
  function toogleNav(){
    setOpenModal(!openModal)
  }
  let navigate = useNavigate()
  let {userData , setUserData} = useContext(UserContext)
 let {cartProducts} =  useContext(CartContext)
 let {wishList} = useContext(WishlistContext)

    function logOut(){
      localStorage.removeItem('userToken')
      setUserData(null)
      navigate('/login')
      
    }
  return <>
    
    {/* <nav className='bg-gray-200  md:fixed top-0 inset-x-0 py-2 text-center capitalize fixed top-0 left-0 right-0 mb-14 z-30'>
      <div className=" flex flex-col md:flex-row justify-between items-center px-10 text-gray-500 p-2">
        <div className='flex flex-col md:flex-row space-x-3'>
          <img src={logo} width={120} alt="" />
          {userData && <ul className='flex flex-col md:flex-row space-x-2'>
            <li><NavLink to="">Home</NavLink></li>
            <li><NavLink to="products">products</NavLink></li>
            <li><NavLink to="categories">categories</NavLink></li>
            <li><NavLink to="brands">brands</NavLink></li>
          </ul>}
          
        </div>
        <div className=''>
          <ul className='flex flex-col md:flex-row space-x-2'>
            <li className='space-x-2 text-black'>
              <i className='fab fa-facebook-f'></i>
              <i className='fab fa-linkedin-in'></i>
              <i className='fab fa-youtube'></i>
              <i className='fab fa-twitter'></i>
              <i className='fab fa-instagram'></i>
            </li>
            { userData && <Link to={'/cart'}><div className='text-main'><i className="fa-solid fa-cart-shopping mx-1.5"></i>
              {cartProducts?.numOfCartItems}</div></Link>  }

                  { userData && <Link to={'/wishlist'}><div className='text-red-500'><i className="fa-regular fa-heart mx-1.5"></i>
              {wishList?.length}</div></Link>  }
            {userData ? <li onClick={logOut}><span className='cursor-pointer mx-3'>logout</span></li> : <>  <li><NavLink to="login">Login</NavLink></li>
            <li><NavLink to="register">Register</NavLink></li></>
}
          
          </ul>
        </div>
      </div>
    </nav>
   */}
  

<nav className="bg-gray-200  md:fixed top-0 inset-x-0 py-2 text-center capitalize fixed top-0 left-0 right-0 z-30">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <img src={logo} width={120} />
    <button onClick={toogleNav} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
      </svg>
    </button>
    {openModal ?   <div className="visible w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col  md:flex-row md:space-x-2.5 ">
            {userData &&  <><li><NavLink to="">Home</NavLink></li>
            <li><NavLink to="products">products</NavLink></li>
            <li><NavLink to="categories">categories</NavLink></li>
            <li><NavLink to="brands">brands</NavLink></li>

              <li className='space-x-2 text-black'>
              <i className='fab fa-facebook-f'></i>
              <i className='fab fa-linkedin-in'></i>
              <i className='fab fa-youtube'></i>
              <i className='fab fa-twitter'></i>
              <i className='fab fa-instagram'></i>
            </li></> }
                        { userData && <Link to={'/cart'}><div className='text-main'><i className="fa-solid fa-cart-shopping mx-1.5"></i>
              {cartProducts?.numOfCartItems}</div></Link>  }

                  { userData && <Link to={'/wishlist'}><div className='text-red-500'><i className="fa-regular fa-heart mx-1.5"></i>
              {wishList?.length}</div></Link>  }
            {userData ? <li onClick={logOut}><span className='cursor-pointer mx-3'>logout</span></li> : <>  <li><NavLink to="login">Login</NavLink></li>
            <li><NavLink to="register">Register</NavLink></li></>
}
      </ul>
    </div> :     <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col  md:flex-row md:space-x-2.5 ">
            {userData &&  <><li><NavLink to="">Home</NavLink></li>
            <li><NavLink to="products">products</NavLink></li>
            <li><NavLink to="categories">categories</NavLink></li>
            <li><NavLink to="brands">brands</NavLink></li>
              <li className='space-x-2 text-black'>
              <i className='fab fa-facebook-f'></i>
              <i className='fab fa-linkedin-in'></i>
              <i className='fab fa-youtube'></i>
              <i className='fab fa-twitter'></i>
              <i className='fab fa-instagram'></i>
            </li></> }
                        { userData && <Link to={'/cart'}><div className='text-main'><i className="fa-solid fa-cart-shopping mx-1.5"></i>
              {cartProducts?.numOfCartItems}</div></Link>  }

                  { userData && <Link to={'/wishlist'}><div className='text-red-500'><i className="fa-regular fa-heart mx-1.5"></i>
              {wishList?.length}</div></Link>  }
            {userData ? <li onClick={logOut}><span className='cursor-pointer mx-3'>logout</span></li> : <>  <li><NavLink to="login">Login</NavLink></li>
            <li><NavLink to="register">Register</NavLink></li></>
}
      </ul>
    </div> }

  </div>
</nav>


  </>
}
