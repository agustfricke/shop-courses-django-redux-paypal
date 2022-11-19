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
import backend from '../../media/server.png'
import frontend from '../../media/backend.png'



function LastCursoCarousel() {



return (
  
    <div className='h-[440px] bg-gray-900/90 mb-10'>
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


      <div className='flex justify-center'>

        <div className="">


          

          <Link to='{`/curso/${curso.id}`}' style={{ textDecoration: 'none' }}>
          <div className='bg-white shadow-2xl'>
          <div className='p-7'>


              <center>
                <h2 className="block text-indigo-900 xl:inline">TODOS LOS CURSOS POR $65</h2>
                <br></br>
                <br></br>
                <button 
                className="mt-2 px-10  items-center justify-center  border border-transparent bg-gray-700 py-3  text-base font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"

                >COMPRAR</button>

                
                
              </center>
          </div>
          </div>


          </Link>



          
        </div>
      </div>
    </div>


  )
}

export default LastCursoCarousel