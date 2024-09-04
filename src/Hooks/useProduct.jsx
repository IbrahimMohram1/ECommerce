import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useEffect } from 'react'

export default function useProduct() {


       function getProducts(){
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
  }

 let response =  useQuery({
    queryKey:['recentProducts'],
    queryFn:getProducts,
    select:(data)=>data?.data?.data
  })
  useEffect(()=>{
    console.log(response);
  },[])
  return response

}
