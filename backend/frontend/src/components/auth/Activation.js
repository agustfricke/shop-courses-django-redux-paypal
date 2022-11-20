import React, { useState, useEffect } from "react";
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { activation } from '../../actions/userActions';
import Error from '../utils/Error';
import Success from "../utils/Success";
import Loader from '../utils/Loader';

const Activate = ({ match, history }) => {

    useEffect(() => {
        document.title = 'Tech con Agust | Activate'
      }, []);

    const dispatch = useDispatch()

    const [exito, setExito] = useState('');

    const userActivation = useSelector(state => state.userActivation)
    const { error, loading, success } = userActivation

    const verify_account = (e) => {

        dispatch(activation(match.params.uid, match.params.token))
        setExito(`Cuenta Activada... Inicia Session`)

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
        <div className='container'>
            <div 
                className='d-flex flex-column justify-content-center align-items-center'
                style={{ marginTop: '200px' }}
            >
                <h4 className="text-center m-6">Verifica tu cuenta</h4>
                <form >
                <button
                    onClick={verify_account}

                    style={{ marginTop: '50px' }}
                    type='button'
                    className="mt-2  items-center justify-center  bg-gray-700 py-3 px-8 text-base font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    Verificar
                </button>
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

export default Activate