import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Carousel, Image } from 'react-bootstrap'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import Tilt from "react-parallax-tilt";

import Loader from '../utils/Loader'
import Message from '../utils/Message'
import { listLastCursos } from "../../actions/cursoActions";
import hacking from '../../media/hacker.png'
import backend from '../../media/data-server.png'
import frontend from '../../media/ux-interface.png'
import block from '../../media/blockchain.png'

import { listOrders } from "../../actions/orderActions";




function LastCursoCarousel() {

  const orderList = useSelector(state => state.orderList)
  const { orders } = orderList

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const dispatch = useDispatch()

  useEffect(() => {

    dispatch(listOrders())

}, [dispatch])




return (
  
    <div className='h-[600px] bg-gray-900/90 mb-10'>
        <div className="mx-auto max-w-3xl pt-10 pb-10">
          <div>


<br></br> <br></br>


            <div>
              <h3 className="text-4xl font-bold tracking-tight sm:text-center sm:text-5xl">
                <span className="block xl:inline text-gray-200"> formación </span>{' '}
                <span className="block xl:inline text-indigo-300">online</span>{' '}
              </h3>
              <h5 className="mt-6 text-lg leading-10 text-gray-200 sm:text-center">
                Especialízate en las áreas con mayor demanda laboral y 
                aprende lo que necesitas para desarrollar tu perfil profesional.

              </h5>
            </div>


          </div>
        </div>


        {userInfo ? (


            <>


{orders && orders.map(o => (
                                        <>
                                            {o.user === userInfo.user_name ? (

                                                <>


<div class="flex justify-center mx-10">
  <Tilt>
  <Link to={'/hacking'}>

          <div className='mx-10'>
            <div class="p-8 bg-gray-900 rounded">
                
                <div class="flex items-center justify-center">
                  <p class="mr-2 text-3xl font-semibold text-gray-200 lg:text-4xl">
                   HACKING
                  </p>
                </div>
              <div className='flex justify-center mr-3'>
                

                <img src={hacking} style={{ maxHeight: "400px" }}>
                </img>
              
              </div>
            </div>
            <div class="w-11/12 h-2 mx-auto bg-gray-900 rounded-b opacity-75" />
            <div class="w-10/12 h-2 mx-auto bg-gray-900 rounded-b opacity-50" />
            <div class="w-9/12 h-2 mx-auto bg-gray-900 rounded-b opacity-25" />
          </div>
          </Link>

          </Tilt>

          <Tilt>
          <Link to={'/backend'}>

          <div className='mx-10'>
            <div class="p-8 bg-gray-900 rounded">
                
                <div class="flex items-center justify-center">
                  <p class="mr-2 text-3xl font-semibold text-gray-200 lg:text-4xl">
                   BACKEND
                  </p>
                </div>
              <div className='flex justify-center mr-3'>
                

                <img src={backend} style={{ maxHeight: "400px" }}>
                </img>
              

              



              </div>
            </div>
            <div class="w-11/12 h-2 mx-auto bg-gray-900 rounded-b opacity-75" />
            <div class="w-10/12 h-2 mx-auto bg-gray-900 rounded-b opacity-50" />
            <div class="w-9/12 h-2 mx-auto bg-gray-900 rounded-b opacity-25" />
          </div>
          </Link>

          </Tilt>

          <Tilt>
          <Link to={'/frontend'}>

          <div className='mx-10'>
            <div class="p-8 bg-gray-900 rounded">
                
                <div class="flex items-center justify-center">
                  <p class="mr-2 text-3xl font-semibold text-gray-200 lg:text-4xl">
                   FRONTEND
                  </p>
                </div>
              <div className='flex justify-center mr-3'>
                

                <img src={frontend} style={{ maxHeight: "400px" }}>
                </img>
              

              



              </div>
            </div>
            <div class="w-11/12 h-2 mx-auto bg-gray-900 rounded-b opacity-75" />
            <div class="w-10/12 h-2 mx-auto bg-gray-900 rounded-b opacity-50" />
            <div class="w-9/12 h-2 mx-auto bg-gray-900 rounded-b opacity-25" />
          </div>
          </Link>

          </Tilt>


          <Tilt>
<Link to={'/blockchain'}>
          <div className='mx-10'>
            <div class="p-8 bg-gray-900 rounded">
                
                <div class="flex items-center justify-center">
                  <p class="mr-2 text-3xl font-semibold text-gray-200 lg:text-4xl">
                   BLOCKCHAIN
                  </p>
                </div>
              <div className='flex justify-center mr-3'>
                

                <img src={block} style={{ maxHeight: "400px" }}>
                </img>
              

              



              </div>
            </div>
            <div class="w-11/12 h-2 mx-auto bg-gray-900 rounded-b opacity-75" />
            <div class="w-10/12 h-2 mx-auto bg-gray-900 rounded-b opacity-50" />
            <div class="w-9/12 h-2 mx-auto bg-gray-900 rounded-b opacity-25" />
          </div>
          </Link>

          </Tilt>

         
          </div>



                                                </>

                                            ) : (

                                                <>





<div class=" flex-initial w-85   max-w-screen-md gap-10 sm:mx-auto">
          <div>
            <div class="p-8 bg-gray-900 rounded">
              <div class="mb-4 text-center">
                <p class="text-xl font-medium tracking-wide text-gray-200">
                  SUBSCRIPCION
                </p>
                <div class="flex items-center justify-center">
                  <p class="mr-2 text-5xl font-semibold text-gray-200 lg:text-6xl">
                    $59,99
                  </p>
                </div>
              </div>
              <div className='flex justify-center mr-9'>
                
              <div>
              <ul class="mb-8 space-y-2">
                <li class="flex items-center">
                  <div class="mr-3">
                    <svg
                      class="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p class="font-medium text-gray-300">700 horas de contentido</p>
                </li>
                <li class="flex items-center">
                  <div class="mr-3">
                    <svg
                      class="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p class="font-medium text-gray-300">Desarrollo Frontend</p>
                </li>
                <li class="flex items-center">
                  <div class="mr-3">
                    <svg
                      class="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p class="font-medium text-gray-300">Desarrollo Backend</p>
                </li>
                <li class="flex items-center">
                  <div class="mr-3">
                    <svg
                      class="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p class="font-medium text-gray-300">Proyectos Full Stack</p>
                </li>
              </ul>
              </div>

              <div>
              <ul class="mb-8 space-y-2">
                <li class="flex items-center">
                  <div class="mr-3">
                    <svg
                      class="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p class="font-medium text-gray-300">Desarrollo Blockchain</p>
                </li>
                <li class="flex items-center">
                  <div class="mr-3">
                    <svg
                      class="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p class="font-medium text-gray-300">Hacking Etico</p>
                </li>
                <li class="flex items-center">
                  <div class="mr-3">
                    <svg
                      class="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p class="font-medium text-gray-300">Soporte </p>
                </li>
                <li class="flex items-center">
                  <div class="mr-3">
                    <svg
                      class="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p class="font-medium text-gray-300">Nuevos cursos todos los meses</p>
                </li>
              </ul>
              </div>



              </div>
              <center>
              <button
                                        type="submit"
                                        className="mt-2 items-center   border border-transparent bg-gray-700 py-3 px-8 text-base font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    >
                                        COMPRAR
                                    </button>
                                    </center>
            </div>
            <div class="w-11/12 h-2 mx-auto bg-gray-900 rounded-b opacity-75" />
            <div class="w-10/12 h-2 mx-auto bg-gray-900 rounded-b opacity-50" />
            <div class="w-9/12 h-2 mx-auto bg-gray-900 rounded-b opacity-25" />
          </div>
         
          </div>










                                                    
                                                </>
                                            )}
                                        </>
                                    ))}







            </>





        ) : (



          <>
          
          



          <div class=" flex-initial w-85   max-w-screen-md gap-10 sm:mx-auto">
          <div>
            <div class="p-8 bg-gray-900 rounded">
              <div class="mb-4 text-center">
                <p class="text-xl font-medium tracking-wide text-gray-200">
                  SUBSCRIPCION
                </p>
                <div class="flex items-center justify-center">
                  <p class="mr-2 text-5xl font-semibold text-gray-200 lg:text-6xl">
                    $59,99
                  </p>
                </div>
              </div>
              <div className='flex justify-center mr-9'>
                
              <div>
              <ul class="mb-8 space-y-2">
                <li class="flex items-center">
                  <div class="mr-3">
                    <svg
                      class="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p class="font-medium text-gray-300">700 horas de contentido</p>
                </li>
                <li class="flex items-center">
                  <div class="mr-3">
                    <svg
                      class="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p class="font-medium text-gray-300">Desarrollo Frontend</p>
                </li>
                <li class="flex items-center">
                  <div class="mr-3">
                    <svg
                      class="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p class="font-medium text-gray-300">Desarrollo Backend</p>
                </li>
                <li class="flex items-center">
                  <div class="mr-3">
                    <svg
                      class="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p class="font-medium text-gray-300">Proyectos Full Stack</p>
                </li>
              </ul>
              </div>

              <div>
              <ul class="mb-8 space-y-2">
                <li class="flex items-center">
                  <div class="mr-3">
                    <svg
                      class="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p class="font-medium text-gray-300">Desarrollo Blockchain</p>
                </li>
                <li class="flex items-center">
                  <div class="mr-3">
                    <svg
                      class="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p class="font-medium text-gray-300">Hacking Etico</p>
                </li>
                <li class="flex items-center">
                  <div class="mr-3">
                    <svg
                      class="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p class="font-medium text-gray-300">Soporte </p>
                </li>
                <li class="flex items-center">
                  <div class="mr-3">
                    <svg
                      class="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p class="font-medium text-gray-300">Nuevos cursos todos los meses</p>
                </li>
              </ul>
              </div>



              </div>
              <center>
              <button
                                        type="submit"
                                        className="mt-2 mx-4  items-center   border border-transparent bg-gray-700 py-3 px-8 text-base font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    >
                                        COMPRAR
                                    </button>

                                    <button
                                        type="submit"
                                        className="mt-2 mx-4 items-center   border border-transparent bg-gray-700 py-3 px-8 text-base font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    >
                                        REGISTRAR
                                    </button>
                                    </center>
            </div>
            <div class="w-11/12 h-2 mx-auto bg-gray-900 rounded-b opacity-75" />
            <div class="w-10/12 h-2 mx-auto bg-gray-900 rounded-b opacity-50" />
            <div class="w-9/12 h-2 mx-auto bg-gray-900 rounded-b opacity-25" />
          </div>
         
          </div>



          </>





        )}



      



     

        </div>






      

  )
}

export default LastCursoCarousel