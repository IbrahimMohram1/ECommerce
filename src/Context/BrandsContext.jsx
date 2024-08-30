import axios from "axios";
import { createContext, useEffect, useState } from "react";

export let BrandsContext = createContext()

export default function BrandsContextProvider({children}){

const [brands, setBrands] = useState(null)
const [Loading, setLoading] = useState(false)
const [specificbrand, setspecificBrand] = useState(null)

    async function getAllBrands(){
        try {
            setLoading(true)
            let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/Brands`)
            setBrands(data.data)
            setLoading(false)
        } catch (error) {
            console.log(error);
        }
    }
  async function specificBrand(id){
    setLoading(true)
    let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/brands/${id}`)
    setspecificBrand(data.data)
    setLoading(false)
  }


    return <BrandsContext.Provider value={{getAllBrands , brands , Loading , setLoading , specificBrand , specificbrand}}>


    {children}

    </BrandsContext.Provider>
}