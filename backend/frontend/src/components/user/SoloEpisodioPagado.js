import React, { useState, useEffect } from "react";
import Message from '../utils/Message';
import Loader from '../utils/Loader'
import { useDispatch, useSelector } from 'react-redux'
import {Route, Redirect} from 'react-router-dom';

import Rating from '../utils/Rating'
import { listEpisodioDetails, createCommentEpisodio, listEpisodios, listCursoDetails } from '../../actions/cursoActions'
import { EPISODIO_CREATE_COMMENT_RESET } from '../../constants/cursoConstants'
import ReactPlayer from 'react-player'
import { Table, Button, Row, Col, Container, Form } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
import { listOrders } from "../../actions/orderActions";
import { listURL } from '../../actions/orderActions'
import { BsSearch } from "react-icons/bs";
import { FaLocationArrow } from "react-icons/fa";





const SoloEpisodioPagado = ({ match, history }) => {

    const [description, setDescription] = useState('')

    const createComment = useSelector(state => state.createComment)
    const { loading: loadingEpisodioComment, error: errorEpisodioComment, success: successEpisodioComment } = createComment


    const dispatch = useDispatch()

    const episodioDetails = useSelector(state => state.episodioDetails)
    const { loading, error, episodio } = episodioDetails

    const episodioAll = useSelector(state => state.episodioAll)
    const { episodios } = episodioAll

    const detailsCurso = useSelector(state => state.detailsCurso)
    const { curso } = detailsCurso

    const orderList = useSelector(state => state.orderList)
    const { orders } = orderList

    const urlList = useSelector(state => state.urlList)
    const { urls } = urlList

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin



    useEffect(() => {
        
        if (successEpisodioComment) {
            setDescription('')
            dispatch({ type: EPISODIO_CREATE_COMMENT_RESET })
        }

        dispatch(listEpisodioDetails(match.params.epi))
        dispatch(listCursoDetails(match.params.curso))
        dispatch(listOrders())
        dispatch(listURL())


    }, [dispatch, match, successEpisodioComment])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(createCommentEpisodio(
            match.params.epi, {
            description
        }
        ))
    }



    return (



    <>

{userInfo && userInfo.premium ? (



        <div className='w-full  bg-gray-900 absolute'>
            <div className="grid grid-cols-3  m-8">
                <div className="col-span-2">
                    <h1 className="text-gray-200 text-center mb-3">{episodio.title} </h1>
                    {urls && urls.map((url) => (
                        <>
                        {url.title == episodio.title ? (

                            <>


<div className="player-wrapper">
    <ReactPlayer url={url.url}
        width="100%"
        height="100%"
        className="react-player"
    />
</div>
                           
                            </>

                        ) : (
                            <>
                   

                    </>
                    )}
</>
                    ))}

                    <p className="text-base mt-6 text-gray-200 ">{episodio.description}</p>
                    <a href={`http://127.0.0.1:8000${episodio.file}`} className='text-gray-200 my-5'>
                        Ver Recurso
                    </a>

                    <br></br>
                    <br></br>

<form className="w-full" onSubmit={submitHandler}>
    <label htmlFor="search" className="sr-only">
      Search
    </label>
    <div className="relative">
      
      <input
      value={description}
      onChange={(e) => setDescription(e.target.value)}
        required
        className="block w-full font-gilroy-light bg-gray-200 dark:bg-dark-bg border dark:border-dark-bg border-gray-300 rounded-full py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
        placeholder="Anade un comentario"
      />
      <button
      type="submit"
      className=" absolute inset-y-0 right-0 pl-3 flex items-center">
        <FaLocationArrow className="h-5 w-5 text-gray-800 mr-5" aria-hidden="true" />
      </button>
    </div>
  </form>


                    


                    {episodio.comments && episodio.comments.map((comment) => (
                        <>
                            <div key={comment.id} className="px-4 py-4  md:max-w-full   ">
                                <div className="grid gap-10 mx-auto sm:row-gap-10 ">
                                    <div className="flex">
                                        <img
                                            className="object-cover w-20 h-20 mr-4 rounded-full shadow"
                                            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                                            alt="Person"
                                        />
                                        <div className="flex flex-col justify-center">
                                            <p className="text-lg font-bold text-gray-100">{comment.user}</p>
                                            <p className="text-sm text-gray-200">{comment.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}


                </div>


                <div className=' mt-6 ml-7'>
                    <h1 className="font-bold text-2xl my-6 text-center text-white">Todos los episodios</h1>
                    {curso.episodios && curso.episodios.map((epi) => (
                        <>
                            <ListGroup key={epi.id}>
                                <ListGroup.Item action href={`/solo/epi/${epi.id}/${curso.id}`}>
                                    <div className="relative">
                                    <button
                                        type="submit"
                                        className=" absolute inset-y-0 right-0 pl-3 flex items-center">
                                            <FaLocationArrow className="h-5 w-5 text-gray-800 mr-5" aria-hidden="true" />
                                        </button>
                                    {epi.title} 
           
                                    </div>
                                </ListGroup.Item>
                            </ListGroup>
                        </>
                    ))}
                </div>
            </div>
        </div>



)   :    (

    <>
    
    <Redirect to='/'/>
    
    
    </>




                        )
                    }
</>

    );
};

export default SoloEpisodioPagado;