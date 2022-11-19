import React, { useState, useEffect } from 'react';

import { listMyOrders } from '../../actions/orderActions';
import { listCursos } from "../../actions/cursoActions";
import { useDispatch, useSelector } from 'react-redux'



export default function MiPerfil() {


  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const orderListMy = useSelector(state => state.orderListMy)
  const { orders } = orderListMy

  const cursoList = useSelector((state) => state.cursoList);
  const { error, loading, cursos } = cursoList;

  const dispatch = useDispatch()

  useEffect(() => {      
    dispatch(listMyOrders())
    dispatch(listCursos())
    }, [dispatch])



  return (
    <>
            <div className='w-full h-[600px] bg-gray-900/90 absolute'>

      <div className='mx-auto max-w-7xl px-4 sm:px-6 pt-6'>
        <div className='px-4 py-5 sm:px-6'>
          <div className="overflow-hidden bg-gray-200 shadow sm:rounded-lg">
            <div className="mt-6">
              <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
                tu cuenta personal
              </h2>
             
              <div>
                <center>
                  <img className="h-40 w-55 rounded-full" src={`http://127.0.0.1:8000${userInfo.image}`} alt="" />
                  <br></br>
                  <h3 className="text-lg font-medium leading-6 text-gray-900">{userInfo.user_name} &nbsp;&nbsp;&nbsp;&nbsp;
                    <a
                      style={{ textDecoration: 'none' }}
                      href={"/editprofile"}
                      className=" bg-indigo-600 py-1 px-5 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      EDIT
                    </a>
                  </h3>
                </center>
              </div>
            </div>

            <div className="border-t border-gray-200 ">
              <dl className='bg-gray-200'>
                <div className="bg-gray-200 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-800">Username</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{userInfo.user_name}</dd>
                </div>
                <div className="bg-gray-200 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-800">Email address</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{userInfo.email}</dd>
                </div>
                <div className="bg-gray-200 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-800">About</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    {userInfo.bio}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
      </div>


    </>
  )
}