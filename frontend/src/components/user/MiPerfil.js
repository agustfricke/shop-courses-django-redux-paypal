import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import Loader from '../utils/Loader';
import Error from '../utils/Error';


export default function MiPerfil() {

  useEffect(() => {
    document.title = `Tech con Agust | Mi Perfil`
  }, []);

  const userLogin = useSelector(state => state.userLogin)
  const { error, loading, userInfo } = userLogin

  useEffect(() => {
    document.title = `Tech con Agust | ${userInfo.user_name}`
  }, []);

  return (
    <>
      {error && <Error>{error}</Error>}
      {loading ?
        <Loader />
        : (
          <div className='mx-auto max-w-7xl px-4 sm:px-6 pt-6'>
        <div className='px-4 py-5 sm:px-6'>
          <div className="overflow-hidden bg-white shadow sm:rounded-lg">
            <div className="mt-6">
              <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
                tu cuenta personal
              </h2>
             
              <div>
                <center>
                  <img className="h-40 w-55 rounded-full" src={`http://127.0.0.1:8000/${userInfo.image}`} alt="" />
                  <br></br>
                  <h3 className="text-lg font-medium leading-6 text-gray-900">{userInfo.user_name} &nbsp;&nbsp;&nbsp;&nbsp;
                    <a
                      style={{ textDecoration: 'none' }}
                      href={"/editprofile"}
                      className=" bg-gray-700 py-1 px-5 text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 "
                    >
                      EDITAR
                    </a>
                  </h3>
                </center>
              </div>
            </div>
            <br></br>

            <div className="border-t border-gray-200">
              <dl>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Nombre de Usuario</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{userInfo.user_name}</dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Correo Electronico</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{userInfo.email}</dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Biografia</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    {userInfo.bio}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
        )}
    </>
  )
}