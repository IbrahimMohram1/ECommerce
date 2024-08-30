import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import axios from 'axios'

export default function VeridyCode() {
    const [apiError, setapiError] = useState(null)
const [loading, setLoading] = useState(false)
let navigate = useNavigate()

    async function verifyCode(values){
        try {
            setLoading(true)
            let {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode` , values)
            navigate('/restpassword')
        } catch (error) {
            setapiError(error.response.data.message)
            setLoading(false)
        }
    }


    
  let formik = useFormik({
 initialValues:{
    resetCode: '',
  }  , onSubmit:verifyCode
}
)
  return <>
    <div className="container h-full">
    <div className="flex justify-center items-center">
        <div className="w-1/2 max-sm:w-full">
        
          <form onSubmit={formik.handleSubmit}>

   {apiError && <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
    {apiError}
</div>}



  
    <div className="relative z-0 w-full mb-5 group">
    <input type="text" name="resetCode" id="resetCode" value={formik.values.resetCode}  onChange={formik.handleChange}  onBlur={formik.handleBlur}  className="block py-4 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "  />
    <label htmlFor="resetCode" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your Code : </label>
  </div>


{loading ? <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
      <i className='fas fa-spinner fa-spin-pulse'></i>
</button> :<button type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Submit</button>
} 

</form></div>
 

    </div>

  </div>
 
  
  </>
}
