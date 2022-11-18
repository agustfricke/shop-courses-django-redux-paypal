import React, { useState, useEffect } from 'react';

import { listMyOrders } from '../../actions/orderActions';
import { listCursos } from "../../actions/cursoActions";
import { useDispatch, useSelector } from 'react-redux'
import Rating from '../utils/Rating';



export default function MisCursos() {


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
        <div className='w-full h-[350px] bg-gray-900/90 absolute'>

        <div className="mt-10">

            <div className="mx-auto max-w-7xl  sm:px-6">
            <h1 className="m-8 text-center">

                <span className="block xl:inline text-gray-200">TUS </span>{' '}
                <span className="block xl:inline text-indigo-400">CURSOS</span>{' '}

            </h1>
                <div className="mx-auto max-w-2xl  sm:py-2 lg:max-w-none overflow-hidden bg-white shadow sm:rounded-lg">
                    

                    {orders && orders.map(order => (

                    <div className="mt-6 m-8 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                        {cursos.map((c) => (
                            <>

                             {order.order_items && order.order_items.map((item) => (
                                <>

                                {c.title === item.curso ? (


                                    <div key={c.name} className="group relative">

                                    <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                                        <img
                                            src={`http://127.0.0.1:8000${c.image}`}
                                            alt={c.imageAlt}
                                            className="h-full w-full object-cover object-center"
                                        />
                                    </div>
                                    <h3 className="mt-6 text-sm text-gray-500">
                                        <a href={`/mi/solo/curso/${c.id}`}>
                                            <span className="absolute inset-0" />
                                            {c.title}
                                        </a>
                                    </h3>
                                    <p className="text-base font-semibold text-gray-900">{c.description}</p>
    
    
                                    <div className="mt-4 flex justify-between">
                                        <div>
                                            <p className="mt-1 text-sm text-gray-500"> <Rating value={c.rating} color={'#ffa900'} />
                                                <p>{`${c.num_reviews} reviews`}</p></p>
                                        </div>
                                        <p className="text-sm font-medium text-gray-900">{c.price} ETH</p>
    
                                    </div>
                                </div>




                                    ) : (

                                        <></>




                                        )}
                                </>

                           
                            ))}
                            </>
                        ))}
                    </div>
                    ))}
                </div>
            </div>
            </div>

        </div>

    )
}