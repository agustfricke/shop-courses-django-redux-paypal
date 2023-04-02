
import React, {  useEffect } from "react";
import {  useSelector } from 'react-redux'
import Error from '../utils/Error';
import Loader from '../utils/Loader'


function OrderScreen() {

    useEffect(() => {
        document.title = `Tech con Agust | Felicitaciones`
      }, []);




    const userLogin = useSelector(state => state.userLogin)
    const { error, loading } = userLogin






    return (
        <>
          {error && <Error>{error}</Error>}
          {loading ?
            <Loader />
            : (

        <div class=" flex-initial w-85  mt-9 max-w-screen-md gap-10 sm:mx-auto">
            <div>
                <div class="p-8 bg-gray-900 rounded">
                    <div class="mb-4 text-center">
                            <p class="mr-2 text-5xl tracking-wide font-medium text-gray-200 lg:text-6xl">
                                FELICITACIONES !
                            </p>
                        <p class="text-xl font-medium tracking-wide text-gray-200">
                            YA ERES MIEMBRO PREMIUM
                        </p>
                        
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
                    <div>
                        <center>
                        <a
                            href='/'
                            style={{ textDecoration: 'none' }}
                            className=" bg-gray-700  py-3 px-5 text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 "
                        > Volver al Inicio

                        </a>
                        </center>
                    </div>
                </div>
                <div class="w-11/12 h-2 mx-auto bg-gray-900 rounded-b opacity-75" />
                <div class="w-10/12 h-2 mx-auto bg-gray-900 rounded-b opacity-50" />
                <div class="w-9/12 h-2 mx-auto bg-gray-900 rounded-b opacity-25" />
            </div>
        </div>
        )}
        </>
      )
    }

export default OrderScreen;
