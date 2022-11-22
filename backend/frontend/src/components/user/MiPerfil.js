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
          <div className='h-[600px] bg-gray-900/90'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 pt-6'>
              <div className='px-4 py-5 sm:px-6'>
                <div className="overflow-hidden bg-gray-900/90 shadow sm:rounded-lg">
                  <div className="mt-6">
                    <h2 className="text-center text-3xl font-bold tracking-tight text-gray-200">
                      tu cuenta personal
                    </h2>
                    <div>
                      <center>
                        <img className="h-40 w-55 rounded-full" src={`http://127.0.0.1:8000${userInfo.image}`} alt="" />
                        <br></br>
                        <h3 className="text-lg font-medium leading-6 text-gray-200">{userInfo.user_name} &nbsp;&nbsp;&nbsp;&nbsp;
                          <a
                            style={{ textDecoration: 'none' }}
                            href={"/editprofile"}
                            className=" bg-gray-300 py-1 px-5 text-sm font-medium text-gray-900 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          >
                            EDIT
                          </a>
                        </h3>
                      </center>
                      <br></br>
                    </div>
                  </div>
                  <div className="border-t border-gray-900/90 ">
                    <dl className='bg-gray-900/90'>
                      <div className="bg-gray-900/90 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-200">Username</dt>
                        <dd className="mt-1 text-sm text-gray-300 sm:col-span-2 sm:mt-0">{userInfo.user_name}</dd>
                      </div>
                      <div className="bg-gray-900/90 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-200">Email address</dt>
                        <dd className="mt-1 text-sm text-gray-300 sm:col-span-2 sm:mt-0">{userInfo.email}</dd>
                      </div>
                      <div className="bg-gray-900/90 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-200">About</dt>
                        <dd className="mt-1 text-sm text-gray-300 sm:col-span-2 sm:mt-0">
                          {userInfo.bio}
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
    </>
  )
}