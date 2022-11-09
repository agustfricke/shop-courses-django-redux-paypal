import React, { useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Button, Table } from 'react-bootstrap'

import Loader from "../utils/Loader";
import Message from "../utils/Message";



export default function MiPerfil({ history }) {


  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin



  return (
    <>

      <div>
        <div>
          <div className="overflow-hidden bg-white shadow sm:rounded-lg">
            <div className="">

              <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
                tu cuenta personal
              </h2>


              <div className="flex min-h-full items-center justify-center  px-4 sm:px-6 lg:px-8">




              </div>


                <div>
                  <center>
                    <img className="h-40 w-55 rounded-full" src={`http://127.0.0.1:8000${userInfo.image}`} alt="" />
                    <br></br>
                    <h3 className="text-lg font-medium leading-6 text-gray-900">{userInfo.user_name} &nbsp;&nbsp;&nbsp;&nbsp;
                      <a
                        style={{ textDecoration: 'none' }}
                        href={"/#/editprofile"}
                        className=" bg-indigo-600 py-1 px-5 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        EDIT
                      </a>
                    </h3>
                  </center>
              </div>



            </div>
            <div className="border-t border-gray-200">
              <dl>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Username</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{userInfo.user_name}</dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Email address</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{userInfo.email}</dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">About</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                      {userInfo.bio}
                    </dd>
                </div>

              </dl>
            </div>
          </div>
        </div>
      </div>


      <div>









      </div>



    </>
  )
}