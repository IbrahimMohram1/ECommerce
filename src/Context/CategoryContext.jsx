import axios from "axios";
import { createContext, useEffect, useState } from "react";

export let CategoryContext = createContext()

export default function CategoryContextProvider({children}){

const [category, setCategory] = useState(null)
  const [Loading, setLoading] = useState(false)


    async function getAllCategory(){
        try {
            setLoading(true)
            let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
            setCategory(data.data)
            console.log(data.data);
                        setLoading(false)

        } catch (error) {
            console.log(error);
        }
    }



    return <CategoryContext.Provider value={{getAllCategory , category ,Loading}}>


    {children}

    </CategoryContext.Provider>
}