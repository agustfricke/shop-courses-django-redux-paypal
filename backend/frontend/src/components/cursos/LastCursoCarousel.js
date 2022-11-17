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
  
    <div className='h-[500px] bg-gray-900/90 mb-10'>
        <div className="mx-auto max-w-3xl pt-10 pb-10">
          <div>
<br></br> <br></br>
            <div>
              <h3 className="text-4xl font-bold tracking-tight sm:text-center sm:text-5xl">
                <span className="block xl:inline text-gray-200"> formación </span>{' '}


                <span className="block xl:inline text-indigo-300">online</span>{' '}

              </h3>
              <p className="mt-6 text-lg leading-10 text-gray-200 sm:text-center">
                Especialízate en las áreas con mayor demanda laboral y aprende lo que necesitas para desarrollar tu perfil profesional
              </p>

            </div>

          </div>
        </div>


      <div className='flex justify-center'>

        <div className="grid grid-cols-3">


          <Link to='{`/curso/${curso.id}`}' style={{ textDecoration: 'none' }}>
            <Tilt>
              <center>
                <h1 className="block text-indigo-300 xl:inline">HACKING</h1>
                <img
                  style={{ maxHeight: "340px" }}
                  className='px-8'
                  src={hacking}
                />
              </center>

            </Tilt>
          </Link>

          <Link to='{`/curso/${curso.id}`}' style={{ textDecoration: 'none' }}>
            <Tilt>
              <center>
                <h1 className="block text-indigo-300 xl:inline">BACKEND</h1>
                <img
                  style={{ maxHeight: "345px" }}
                  className='px-8'
                  src={backend}
                />
              </center>
            </Tilt>
          </Link>



          <Link to='{`/curso/${curso.id}`}' style={{ textDecoration: 'none' }}>
            <Tilt>
              <center>
                <h1 className="block text-indigo-300 xl:inline">FRONTEND</h1>
                <img
                  style={{ maxHeight: "340px" }}
                  className='px-8'
                  src={frontend}
                />
              </center>
            </Tilt>
          </Link>
        </div>
      </div>
    </div>


  )
}

export default LastCursoCarousel