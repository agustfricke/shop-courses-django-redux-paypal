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
import Rating from '../utils/Rating'
import { listCursos } from "../../actions/cursoActions";

import { listOrders } from "../../actions/orderActions";




function Backend(history) {

  const cursoList = useSelector((state) => state.cursoList);
  const { error, loading, cursos } = cursoList;

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(listCursos());
  }, [dispatch]);




return (
  
    <div className='h-[500px] bg-gray-900/90 mb-1'>
          <div>


<br></br> <br></br>
<br></br> <br></br>


<div>
              <h3 className="text-4xl font-bold tracking-tight sm:text-center sm:text-5xl">
                <span className="block xl:inline text-gray-200"> CURSOS </span>{' '}
                <span className="block xl:inline text-indigo-300">BACKEND</span>{' '}
              </h3>
              
            </div>            

            <div className=" mt-10">
          <div className="mx-auto max-w-7xl  sm:px-6 ">
            <div className="mx-auto max-w-2xl  sm:py-2 lg:max-w-none ">
            
            
              <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">

                {cursos.map((c) => (
                  <>
                  {c.category === 'Backend' && 'Proyectos' ? (


                    <>
                    
                    <div className='bg-gray-900 shadow-2xl'>
                  <div className='m-8'>

                  
                  <div key={c.id} className="group relative">
                  <a href={`/curso/${c.id}`}>

                    <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                      <img
                        src={`http://127.0.0.1:8000${c.image}`}
                        alt={c.imageAlt}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                        
                    <h3 className='font-semibold mt-6 text-gray-200'>{c.title}</h3>
                    
                    <p className="text-base font-semibold text-gray-200">{c.description}</p>

                    </a>

                    <div className="mt-4 flex justify-between">
                  <div>
                    
                    <p className="mt-1 text-sm text-gray-100"> <Rating value={c.rating} color={'#ffa900'} />
                        <p>{`${c.num_reviews} reviews`}</p></p>
                  </div>
                  <p className="text-sm font-medium text-gray-100">{c.price} ETH</p>   
                     
                </div>
                  </div>
                  </div>
            </div>
                    
                    
                    
                    
                    </>

                  ) : (

                    <>



                  
            
            </>
)}
</>
                ))}
              </div>
            </div>
          </div>
        </div>




          </div>
        </div>



     



     







      

  )
}

export default Backend