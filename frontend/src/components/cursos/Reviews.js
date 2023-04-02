import React, { useState, useEffect } from "react";
import Message from '../utils/Message';
import Loader from '../utils/Loader';
import Error from "../utils/Error";
import { useDispatch, useSelector } from 'react-redux'
import Rating from '../utils/Rating'
import { listCursoDetails, createCursoReview } from '../../actions/cursoActions'
import { CURSO_CREATE_REVIEW_RESET } from '../../constants/cursoConstants'
import { TbWorld } from "react-icons/tb";
import { Form } from 'react-bootstrap'
import { listUsers } from '../../actions/userActions';



export default function Reviews({ match }) {


    useEffect(() => {
        document.title = 'Tech con Agust | Reviews'
      }, []);

    const [rating, setRating] = useState(0)
    const [comment, setComment] = useState('')

    const detailsCurso = useSelector(state => state.detailsCurso)
    const { loading, error, curso } = detailsCurso

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const createReview = useSelector(state => state.createReview)
    const { loading: loadingcursoReview, error: errorcursoReview, success: successcursoReview } = createReview

    const userList = useSelector(state => state.userList);
    const {users} = userList;

    const dispatch = useDispatch()


    useEffect(() => {
        if (successcursoReview) {
            setRating(0)
            setComment('')
            dispatch({ type: CURSO_CREATE_REVIEW_RESET })
        }

        dispatch(listCursoDetails(match.params.id))
        dispatch(listUsers());

    }, [dispatch, match, successcursoReview])


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
          <Loader />
          : (

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
                            </div>
                        </div>

                        {userInfo && userInfo.premium === 'premium' ? (
                            <div className='bg-white shadow-2xl'>
                                <div className='p-3 mt-6'>
                                    <h2 className='font-bold text-2xl my-6 text-gray-800 text-center'>Deja una Review </h2>
                                    <form onSubmit={submitHandler}
                                    >
                                        <div className="shadow sm:overflow-hidden sm:rounded-md">
                                            <div className="grid grid-cols-3 gap-6">
                                                <div className="col-span-3 sm:col-span-2">
                                                </div>
                                            </div>

                                            <div>
                                                <div className="mt-1">
                                                    <textarea
                                                        value={comment}
                                                        onChange={(e) => setComment(e.target.value)}
                                                        type="text"
                                                        id="body"
                                                        rows={3}
                                                        className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                        placeholder="Escribe aqui!"
                                                    />
                                                </div>
                                                <Form.Control
                                                    as='select'
                                                    value={rating}
                                                    onChange={(e) => setRating(e.target.value)}
                                                >
                                                    <option value=''>Selecciona el numero de estrellas</option>
                                                    <option value='1'>1 - No me gusto</option>
                                                    <option value='2'>2 - Regular</option>
                                                    <option value='3'>3 - Bien</option>
                                                    <option value='4'>4 - Muy bien</option>
                                                    <option value='5'>5 - Exelente</option>
                                                </Form.Control>
                                            </div>
                                        </div>

                                        <div className="bg-gray-50 text-center px-4 py-3  sm:px-6">
                                            <button
                                                disabled={loadingcursoReview}
                                                type='submit'
                                                className='bg-gray-700 py-3 px-5 text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2'
                                            >
                                                POST
                                            </button>
                                        </div>
                                    </form>
                                </div>

                            </div>
                       ) : (

                        <>
                        </>

                       )}
                    </div>



                    <div className="pt-8">
                        {curso.reviews.length && curso.reviews.length === 0 && <Message>No Reviews</Message>}
                        {curso.reviews.map((review) => (
                            <>
                                {users && users.map(user => (
                                    <>
                                    {user.user_name === review.user &&

                            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                                    <h1 className="">
                                        <span className="block xl:inline text-gray-800">opinones de nustros   </span>{' '}
                                        <span className="block xl:inline text-indigo-800">alumnos</span>{' '}
                                    </h1>
                                </div>
                                <div className="grid gap-10 row-gap-8 mx-auto sm:row-gap-10 lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-3">
                                    <div className="flex" key={user.id}>
                                          
                                        <img
                                            className="object-cover w-20 h-20 mr-4 rounded-full shadow"
                                            src={`http://127.0.0.1:8000/${user.image}`}
                                            alt={user.user_name}
                                        />
                                        <div className="flex flex-col justify-center">
                                            <p className="text-lg font-bold text-gray-800">{review.user}</p>
                                            <p className="text-sm text-gray-800">{review.comment}</p>
                                            <Rating value={review.rating} color={'#ffa900'} />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        }
</>
                                    ))}
                                    </>

                        ))}
                    </div>
                </div>
            </div>
        </div>
            )}
            </>
    )

}
