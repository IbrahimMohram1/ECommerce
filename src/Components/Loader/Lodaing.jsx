import React from 'react'
import { InfinitySpin } from 'react-loader-spinner'

export default function Lodaing() {
  return <>
  <div className='flex justify-center items-center'>
    <InfinitySpin
  visible={true}
  width={300}
  color="#4fa94d"
  ariaLabel="infinity-spin-loading"
  />
  </div>

  </>
}
