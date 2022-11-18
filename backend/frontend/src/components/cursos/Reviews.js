import React, { useState, useEffect } from "react";
import Message from '../utils/Message';
import Loader from '../utils/Loader'
import { useDispatch, useSelector } from 'react-redux'
import Rating from '../utils/Rating'
import { listCursoDetails, createCursoReview } from '../../actions/cursoActions'
import { CURSO_CREATE_REVIEW_RESET } from '../../constants/cursoConstants'
import { TbWorld } from "react-icons/tb";
import { Table, Button, Row, Col, Container, Form } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion';



export default function Reviews({ match, history }) {

    const detailsCurso = useSelector(state => state.detailsCurso)
    const { loading, error, curso } = detailsCurso

    const dispatch = useDispatch()


    useEffect(() => {

        dispatch(listCursoDetails(match.params.id))

    }, [dispatch, match])


    return (



        <div>


            <div name='support' className='w-full'>


                <div className='w-full h-[350px] bg-gray-900/90 absolute'>



                    <div className='max-w-[1240px] mx-auto text-white relative mt-10'>

                        <div className="flex justify-start flex-col items-start space-y-2">
                            <a
                                style={{ textDecoration: 'none' }}
                                href="/"
                                className="flex flex-row items-center text-gray-200 hover:text-gray-200 space-x-1">
                                <svg className="fill-stroke" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.91681 7H11.0835" stroke="currentColor" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M2.91681 7L5.25014 9.33333" stroke="currentColor" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M2.91681 7.00002L5.25014 4.66669" stroke="currentColor" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p className="text-sm leading-none">Atras</p>
                            </a>
                        </div>


                        <div className=' text-black '>
                            <div className='col-span-2'>

                                <div className='p-8'>

                                    <h1 className="">

                                        <span className="block xl:inline text-indigo-300 ">Reviews de</span>{' '}


                                        <span className="block xl:inline text-gray-200">{curso.title}  </span>{' '}




                                        <div className=" grid-cols-3 gap-2 flex mt-6 mb-6  justify-start">

                                            <span className="block xl:inline text-indigo-300 "><Rating value={curso.rating} color={'#ffa900'} /> </span>{' '}


                                            <span className="block xl:inline text-indigo-300 ">{`${curso.num_reviews} reviews`}</span>{' '}

                                        </div>


                                    </h1>



                                    <p className='text-gray-100 text-xl'>{curso.description}.</p>

                                    <div className=" grid-cols-3 gap-2 flex justify-start">




                                        <p className="mt-1 text-sm text-gray-300 pl-4">
                                            <TbWorld />
                                        </p>

                                        <p className="mt-1 text-sm text-gray-300">
                                            Espanol
                                        </p>

                                        <p className="mt-1 text-sm text-gray-300 pl-4">
                                            Creado por <span className="text-gray-100"> Agustin Fricke </span>
                                        </p>

                                    </div>


                                    <div className="pt-8">

                                        {curso.reviews.length && curso.reviews.length === 0 && <Message variant='info'>No Reviews</Message>}
                                        {curso.reviews.map((review) => (
                                            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                                                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">

                                                    <h1 className="">

                                                        <span className="block xl:inline text-gray-800">opinones de nustros   </span>{' '}


                                                        <span className="block xl:inline text-indigo-800">alumnos</span>{' '}
                                                    </h1>
                                                </div>
                                                <div className="grid gap-10 row-gap-8 mx-auto sm:row-gap-10 lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-3">
                                                    <div className="flex">
                                                        <img
                                                            className="object-cover w-20 h-20 mr-4 rounded-full shadow"
                                                            src="https://images.pexels.com/photos/3783255/pexels-photo-3783255.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                                                            alt="Person"
                                                        />
                                                        <div className="flex flex-col justify-center">
                                                            <p className="text-lg font-bold">{review.user}</p>
                                                            <p className="text-sm text-gray-800">{review.comment}</p>
                                                            <Rating value={review.rating} color={'#ffa900'} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
