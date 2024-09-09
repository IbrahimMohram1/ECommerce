import React, { useState } from 'react'
import style from './Notfound.module.css'
import { Link } from 'react-router-dom'

export default function Notfound() {



    
  return <>
    
<div className=" bg-gray-50 flex items-center">
  <div className="container flex flex-col md:flex-row items-center justify-between px-5 text-gray-700 max-sm:mt-24" >
    <div className="w-full lg:w-1/2 mx-8  sm:mt-28">
      <div className="text-7xl text-green-500 font-dark font-extrabold mb-8"> 404</div>
      <p className="text-2xl md:text-3xl font-light leading-normal mb-8">
        Sorry we couldn't find the page you're looking for
      </p>
      <Link to={'/'}>
      <button className="px-5 inline py-3 text-sm font-medium leading-5 shadow-2xl text-white rounded-lg bg-green-600">Back To Home Page</button>
      </Link>
    </div>
    <div className="w-full lg:flex lg:justify-end lg:w-1/2 mx-5 my-12">
      <img src="https://user-images.githubusercontent.com/43953425/166269493-acd08ccb-4df3-4474-95c7-ad1034d3c070.svg"  alt="Page not found" />
    </div>
  </div>
</div>

  </>
}
