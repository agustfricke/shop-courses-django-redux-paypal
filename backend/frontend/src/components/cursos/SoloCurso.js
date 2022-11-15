import React, { useState, useEffect } from "react";
import Message from '../utils/Message';
import Loader from '../utils/Loader'
import { useDispatch, useSelector } from 'react-redux'
import Rating from '../utils/Rating'
import { listCursoDetails, createCursoReview } from '../../actions/cursoActions'
import { CURSO_CREATE_REVIEW_RESET } from '../../constants/cursoConstants'
import { TbWorld } from "react-icons/tb";
import { Table, Button, Row, Col, Container, Form } from 'react-bootstrap'




const SoloCurso = ({ match, history }) => {

    const [quantity, setQuantity] = useState(1)
    const [rating, setRating] = useState(0)
    const [comment, setComment] = useState('')


    const dispatch = useDispatch()

    const detailsCurso = useSelector(state => state.detailsCurso)
    const { loading, error, curso } = detailsCurso

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
        history.push(`/cart/${match.params.id}?quantity=${quantity}`)

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
   
    <div name='support' className='w-full'>

        
      <div className='w-full h-[300px] bg-gray-900/90 absolute'>

      
      
      <div className='max-w-[1240px] mx-auto text-white relative mt-10'>

      <div className="flex justify-start flex-col items-start space-y-2">
                <a 
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

                      <h3 className='font-bold text-2xl my-6 text-gray-100'>{curso.title}</h3>
                      <p className='text-gray-100 text-xl'>{curso.description}</p>



                      <div className=" grid-cols-3 gap-2 flex justify-start">


                      <p className="mt-1 text-sm text-gray-300"> <Rating value={curso.rating} color={'#ffa900'} />
                        {`${curso.num_reviews} reviews`}</p>

                        <p className="mt-1 text-sm text-gray-300 pl-4">
                        <TbWorld/>
                        </p>

                        <p className="mt-1 text-sm text-gray-300">
                        Espanol
                        </p>

                        <p className="mt-1 text-sm text-gray-300 pl-4">
                            Creado por <span className="text-gray-100"> Agustin Fricke </span> 
                        </p>

                      </div>



                    <div className="pt-8">

                    <h3>Contentido del curso</h3>


                    </div>

                    
                 


                  </div>
              </div>


              <div className='bg-white shadow-2xl'>


                <div className='p-1'>
                    <img
                    style={{ maxHeight: "440px" }}
                    src={`http://127.0.0.1:8000${curso.image}`}
                  />


                  <div className='p-2'>

                      <h3 className='font-bold text-2xl my-2'>$USD {curso.price}</h3>
                      <button
                        onClick={addToCartHandler}
                        type="submit"
                        className="mt-2 flex w-full items-center justify-center  border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Comprar
                    </button>
                  </div>

                </div>



            </div> 
          </div>



          <Table striped bordered hover responsive className='table-sm'>

            <div className="grid grid-cols-3 gap-4">
              <div className='col-span-2'>


                            <thead>
                                <tr>
                                    <th>Pic</th>
                                    <th>Titulo</th>
                                    <th>Description</th>

                                </tr>
                            </thead>

                            <tbody>




                                {curso.episodios && curso.episodios.map((epi) => (


                                    <tr key={epi.id}>
                                        <td><img
                                            style={{ maxHeight: "50px" }}
                                            src={`http://127.0.0.1:8000${epi.image}`}
                                            alt=""
                                        /></td>

                                        <td>{epi.title}</td>
                                        <td>{epi.description}</td>


                                       


                                            

                                           

                                            
                                    </tr>
                                ))}


                            </tbody>
                        </div>
                    </div>



                        </Table>

                        

                
                        </div>
                      </div>
                    </div>

            

    );
};

export default SoloCurso;