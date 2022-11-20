import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Error from '../utils/Error';
import Loader from '../utils/Loader'
import { getOrderDetails } from '../../actions/orderActions'


function OrderScreen({ match, history }) {

    const orderId = match.params.id
    const dispatch = useDispatch()


    const orderDetails = useSelector(state => state.orderDetails)
    const { order, error, loading } = orderDetails

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin


    useEffect(() => {

        if (!userInfo) {
            history.push('/login')
        }

        if (!order || order.id !== Number(orderId)) {
            dispatch(getOrderDetails(orderId))
        } else if (!order.is_paid) {
        }
    }, [dispatch, order, orderId])





    return (
        <>
          {error && <Error>{error}</Error>}
          {loading ?
            <Loader />
            : (

        <div class=" flex-initial w-85   max-w-screen-md gap-10 sm:mx-auto">
            <div>
                <div class="p-8 bg-gray-900 rounded">
                    <div class="mb-4 text-center">
                        <p class="text-xl font-medium tracking-wide text-gray-200">
                            YA ERES MIEMBRO PREMIUM
                        </p>
                        <div class="flex items-center justify-center">
                            <p class="mr-2 text-5xl font-semibold text-gray-200 lg:text-6xl">
                                FELICITACIONES!
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
                    <div>
                        <a
                            href='/'
                            style={{ textDecoration: 'none' }}
                            className="block w-full font-gilroy-light text-gray-200 bg-gray-700 dark:bg-dark-bg border dark:border-dark-bg   py-3  text-sm  focus:outline-none hover:bg-gray-800 focus:text-gray-900  focus:ring-1 focus:ring-gray-500 focus:border-gray-500 "
                        > Volver a Home

                        </a>
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
