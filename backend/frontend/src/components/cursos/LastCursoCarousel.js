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

    <div className='py-10 '>
      <div className="relative ">
        <div className="mx-auto max-w-3xl pt-10 pb-10">
          <div>

            <div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
                <span className="block xl:inline text-gray-800"> formación </span>{' '}


                <span className="block xl:inline text-indigo-800">online</span>{' '}

              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-700 sm:text-center">
                Especialízate en las áreas con mayor demanda laboral y aprende lo que necesitas para desarrollar tu perfil profesional
              </p>

            </div>

          </div>
        </div>
      </div>


      <div className='flex justify-center'>

        <div className="grid grid-cols-3">


          <Link to='{`/curso/${curso.id}`}' style={{ textDecoration: 'none' }}>
            <Tilt>
              <center>
                <h1 className="block text-indigo-800 xl:inline">HACKING</h1>
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
                <h1 className="block text-indigo-800 xl:inline">BACKEND</h1>
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
                <h1 className="block text-indigo-800 xl:inline">FRONTEND</h1>
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