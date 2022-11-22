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
import { FaLocationArrow } from "react-icons/fa";
import ContentLoader from "../utils/ContentLoader";
import Error from "../utils/Error";
import Modal from 'react-bootstrap/Modal';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ModalHeader from 'react-bootstrap/esm/ModalHeader';



const SoloCurso = ({ match, history }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
    }

    const [quantity, setQuantity] = useState(1)
    const [rating, setRating] = useState(0)
    const [comment, setComment] = useState('')


    const dispatch = useDispatch()

    const detailsCurso = useSelector(state => state.detailsCurso)
    const { loading, error, curso } = detailsCurso

    useEffect(() => {
        document.title = `Tech con Agust | ${curso.title}`
      }, []);


    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const createReview = useSelector(state => state.createReview)
    const { loading: loadingcursoReview, error: errorcursoReview, success: successcursoReview } = createReview

    useEffect(() => {
        if (successcursoReview) {
            setRating(0)
            setComment('')
            dispatch({ type: CURSO_CREATE_REVIEW_RESET })
        }

        dispatch(listCursoDetails(match.params.id))

    }, [dispatch, match, successcursoReview])

    const addToCartHandler = () => {
        history.push('/payment')

    }

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(createCursoReview(
            match.params.id, {
            rating,
            comment
        }
        ))
    }

    return (

        <>
        {error && <Error>{error}</Error>}
        {loading ?
          <ContentLoader />
          : (
            <>
            <Modal show={show} onHide={handleClose}>

            <ModalHeader closeButton>
                <Modal.Title>
                   {curso.title}
                </Modal.Title>
            </ModalHeader>

            <Modal.Body>
            <div className="player-wrapper">
                <iframe src={curso.trailer}
                width="100%"
                height="100%"
                className="react-player"
                loading="lazy" 
                allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;" allowfullscreen="true">

                </iframe>
                </div>
            </Modal.Body>
            </Modal>


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


                    <div className='grid grid-cols-3 gap-4 text-black '>
                        <div className='col-span-2'>
                            <div className='p-8'>
                                <h2 className='font-bold text-2xl my-6 text-gray-100'>{curso.title}</h2>
                                <p className='text-gray-100 text-xl'>{curso.description}.</p>
                                <div className=" grid-cols-3 gap-2 flex justify-start">
                                    <a
                                        href={`/review/${curso.id}`} className="mt-1 text-sm text-gray-300 hover:text-gray-100 "> <Rating value={curso.rating} color={'#ffa900'} />
                                        {`${curso.num_reviews} reviews`}
                                    </a>

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
                                    <br></br> <br></br>
                                    <h1>Contentido del curso</h1>
                                </div>
                            </div>
                        </div>


                        <div className='bg-gray-900 shadow-2xl'>
                            <div className='p-1'>
                                <img
                                    style={{ maxHeight: "440px" }}
                                    src={`http://127.0.0.1:8000${curso.image}`}
                                />
                                <div className='p-4'>
                                        <>
                                            {userInfo && userInfo.premium === 'premium' ? (

                                                <>



                                                </>

                                            ) : (

                                                <>
                                                    <h3 className='font-bold text-2xl my-2'>$USD {curso.price}</h3>
                                                    <button
                                                        onClick={addToCartHandler}
                                                        type="submit"
                                                        className="mt-2 flex w-full items-center justify-center   bg-indigo-700 py-3 px-8 text-base font-medium text-white hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                                    >
                                                        Comprar
                                                    </button>
                                                </>
                                            )}
                                        </>


                                    <button
                                    onClick={() => { setShow(true)}}
                                    style={{ textDecoration: 'none' }}
                                    type="submit"
                                    className="mt-2 flex w-full items-center justify-center  bg-gray-700 py-3 px-8 text-base font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    >
                                        Ver Trailer
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>



                        <div className="grid grid-cols-3 gap-4">
                            <div className='col-span-2'>
                                {curso.episodios && curso.episodios.map((epi) => (
                                    <Accordion>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>{epi.title}</Accordion.Header>
                                            <Accordion.Body>
                                                <div className="grid grid-cols-3 gap-4">
                                                    <div className="col-span-2 ">

                                                    <p className="text-gray-800">{epi.description}</p>    
                                                    </div>
                                                    <div>
                                                            <>

                                                            {userInfo && userInfo.premium === 'premium' ? (

                                                                    <a href={`/solo/epi/${epi.id}/${curso.id}`} style={{ textDecoration: 'none' }}>
                                                <div className="relative">
      
      <p
        className="block w-full font-gilroy-light text-gray-200 bg-gray-700 dark:bg-dark-bg border dark:border-dark-bg   py-2 pl-10 pr-3 text-sm  focus:outline-none hover:bg-gray-800 focus:text-gray-900  focus:ring-1 focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
      > VER EPISODIO</p>
      <button
      type="submit"
      className=" absolute inset-y-0 right-0 pl-3 flex items-center">
        <FaLocationArrow className="h-5 w-5 text-gray-200 mr-5" aria-hidden="true" />
      </button>
    </div>

                                                                    </a>

                                                                ) : (

                                                                    <>


                                                                    </>

                                                                )}
                                                            </>
                                                    </div>
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                ))}
                            </div>
                        </div>
                </div>
            </div>
        </div>

        </>
        )}
    </>
    );
};

export default SoloCurso;