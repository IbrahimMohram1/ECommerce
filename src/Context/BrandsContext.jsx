import axios from "axios";
import { createContext, useEffect, useState } from "react";

export let BrandsContext = createContext()

export default function BrandsContextProvider({children}){

const [brands, setBrands] = useState(null)
const [Loading, setLoading] = useState(false)

    async function getAllBrands(){
        try {
            setLoading(true)
            let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/Brands`)
            setBrands(data.data)
            console.log(data.data);
            setLoading(false)
        } catch (error) {
            console.log(error);
        }
    }



    return <BrandsContext.Provider value={{getAllBrands , brands , Loading}}>


    {children}

    </BrandsContext.Provider>
}