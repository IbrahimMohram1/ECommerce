import React, { useContext, useState } from 'react'
import style from './Login.module.css'
import { Link, useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { Formik, useFormik } from 'formik'
import axios, { Axios } from 'axios'
import { UserContext } from '../../Context/UserContext'

export default function Login() {
  

const [apiError, setapiError] = useState(null)
const [loading, setLoading] = useState(false)
let navigate = useNavigate()
let {setUserData} = useContext(UserContext)
 async function login(values){
    try {
      setLoading(true)
        let {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin` , values)
        localStorage.setItem('userToken' , data.token)
        navigate('/')
        setUserData(data.token)
    }
     catch (error) {
      setapiError(error.response.data.message)
      setLoading(false)
    }
  
  }


    let validationSchema = Yup.object().shape({
    email: Yup.string().email('inValid Mail').required('Email Is Required'),
    password: Yup.string().matches(/^[A-Z]\w{5,15}$/ , 'Must Start a UpperCase and 5 to 15 any word Character').required('Password Is Required'),
  })
    
  let formik = useFormik({
 initialValues:{
    email: '',
    password: '',
  } , validationSchema , onSubmit:login
}
)

  return <>
    
  <div className='w-1/2 mx-auto py-7 md:w-1/2 sm:w-full '>
    
<form onSubmit={formik.handleSubmit}>

   {apiError && <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
    {apiError}
</div>}


  
    <div className="relative z-0 w-full mb-5 group">
    <input type="email" name="email" id="email" value={formik.values.email}  onChange={formik.handleChange}  onBlur={formik.handleBlur} className="block py-4 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "  />
    <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your Mail : </label>
  </div>
    {formik.errors.email && formik.touched.email && <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
    {formik.errors.email}
</div>}

   <div className="relative z-0 w-full mb-5 group">
    <input type="password" name="password" id="password" value={formik.values.password}  onChange={formik.handleChange}  onBlur={formik.handleBlur} className="block py-4 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "  />
    <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your Password : </label>
  </div>  
    {formik.errors.password && formik.touched.password && <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
    {formik.errors.password}
</div>}

   
   {loading ? <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
      <i className='fas fa-spinner fa-spin-pulse'></i>
</button> :<button type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Submit</button>
} 

 <Link to={'/forgetpassword'}><p  className='text-center text-main'>Forgotten Password?</p></Link> 
</form>
</div>  
  </>
}
