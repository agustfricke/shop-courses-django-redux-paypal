import React, { useState, useEffect } from "react";
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { Reset } from '../../actions/userActions'
import { FaLocationArrow } from "react-icons/fa";
import Error from '../utils/Error';
import Success from "../utils/Success";
import Loader from '../utils/Loader';


const ResetPassword = ({ reset_password }) => {

    useEffect(() => {
        document.title = 'Tech con Agust | Restablecer Contraseña'
      }, []);
    
    const [email, setEmail] = useState('')
    const [exito, setExito] = useState('');


    const dispatch = useDispatch()

    const passwordRest = useSelector(state => state.passwordRest)
    const { error, loading, success } = passwordRest


    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(Reset(email))
        setExito(`Verifica tu Correo en ${email}`)
      }



    return (
        <>
        {error && <Error>{error}</Error>}
        {exito && <Success>{exito}</Success>}

        {loading ?
          <Loader />
          : (
            <>
          {success ? (

<>
<div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className=' shadow-2xl'>
              <div className=' m-5 p-10'>
                <div className="w-full max-w-md space-y-8">
                  <div >
                   
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                      VERIFICA TU CORREO ELECTRINCO
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          </>

          ) : (


          <>
        <div className='container mt-5'>
            <div 
                className='d-flex flex-column justify-content-center align-items-center'
                style={{ marginTop: '200px' }}
            >
            <h4 className="text-center m-6">Recuperar Contraseña</h4>

            <form className="w-full" onSubmit={submitHandler}>
<label htmlFor="search" className="sr-only">
  Search
</label>
<div className="relative">
  
  <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
    required
    className="block w-full font-gilroy-light bg-gray-200 dark:bg-dark-bg border dark:border-dark-bg border-gray-300 py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
    placeholder="Correo Electronico"
  />
  <button
  type="submit"
  className=" absolute inset-y-0 right-0 pl-3 flex items-center">
    <FaLocationArrow className="h-5 w-5 text-gray-800 mr-5" aria-hidden="true" />
  </button>
</div>
</form>
</div>
        </div>


        </>

)}
</>
 
)}
</>
)
}

export default ResetPassword;
