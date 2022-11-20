import React, { useState, useEffect } from "react";
import { Redirect } from 'react-router-dom';
import {Confirm} from '../../actions/userActions'
import { useDispatch, useSelector } from 'react-redux'
import Error from '../utils/Error';
import Success from "../utils/Success";
import Loader from '../utils/Loader';

const ResetPasswordConfirm = ({ match, history }) => {

    useEffect(() => {
        document.title = 'Tech con Agust | Confirmar Contraseña'
      }, []);

    const dispatch = useDispatch()


    const [re_password, setNewPassword] = useState('');
    const [re_new_password, setre_new_password] = useState('');
    const [exito, setExito] = useState('');

    const passwordConfirm = useSelector(state => state.passwordConfirm)
    const { error, loading, success } = passwordConfirm


    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(Confirm(match.params.uid,match.params.token, re_password, re_new_password))
        setExito(`Cuenta Resablecida... Incia Session`)
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
                   
                  <a
                  style={{ textDecoration: 'none' }}
                  className="mt-2  items-center justify-center  bg-gray-700 py-3 px-8 text-base font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                   href="/login">
                      
                    Inicia Session
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          </>

          ) : (

            <>

        
<div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
<div className=' shadow-2xl'>
  <div className=' m-5 p-10'>
    <div className="w-full max-w-md space-y-8">
      
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Restaura tu Contraseña
        </h2>
      </div>
      <form onSubmit={submitHandler} className="mt-8 space-y-6" action="#" method="POST">
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="">
          <div>
          <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              value={re_password}
              onChange={(e) => setNewPassword(e.target.value)}
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              class="block border border-grey-light w-full p-3 rounded mb-2 placeholder-gray-600 "
              placeholder="Contraseña"
            />
            
          </div>
          <br></br>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              value={re_new_password}
              onChange={(e) => setre_new_password(e.target.value)}
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              class="block border border-grey-light w-full p-3 rounded mb-2 placeholder-gray-600 "
              placeholder="Confirmar Contraseña"
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="block w-full font-gilroy-light text-gray-200 bg-gray-700 dark:bg-dark-bg border dark:border-dark-bg   py-3  text-sm  focus:outline-none hover:bg-gray-800 focus:text-gray-900  focus:ring-1 focus:ring-gray-500 focus:border-gray-500 "
          >

            Restaurar
          </button>
        </div>
      </form>
      
      
    </div>
  </div>
</div>
     </>

        )}
        </>
         
        )}
    </>
  )
}

export default ResetPasswordConfirm
