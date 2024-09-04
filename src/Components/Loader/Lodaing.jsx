import React from 'react'
import { Triangle } from 'react-loader-spinner'

export default function Lodaing() {
  return <>
  <div className='fixed top-0 left-0 right-0 bottom-0 bg-[#00000099] vh-100 flex items-center justify-center '>
  <div className='  text-center   '>
  <Triangle
  visible={true}
  color="#4fa94d"
  ariaLabel="triangle-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
  </div>  
</div>
  </>
}
