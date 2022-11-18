import React, { useState, useEffect } from "react";
import Message from '../utils/Message';
import Loader from '../utils/Loader'
import { useDispatch, useSelector } from 'react-redux'
import Rating from '../utils/Rating'
import { listEpisodioDetails, createCommentEpisodio, listEpisodios, listCursoDetails } from '../../actions/cursoActions'
import { EPISODIO_CREATE_COMMENT_RESET } from '../../constants/cursoConstants'
import ReactPlayer from 'react-player'
import { Table, Button, Row, Col, Container, Form } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion';




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

    

    useEffect(() => {
        if (successEpisodioComment) {
            setDescription('')
            dispatch({ type: EPISODIO_CREATE_COMMENT_RESET })
        }

        dispatch(listEpisodioDetails(match.params.epi))
        dispatch(listCursoDetails(match.params.curso))


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
        <div className='w-full h-[450px] bg-gray-900/90 absolute'>

        <div className="grid grid-cols-3  m-8">

            <div className="col-span-2">


                <h1 className="text-center  font-bold text-2xl  text-white">{episodio.title}</h1>


                <ReactPlayer url='https://vimeo.com/772171855?ts=0'  fallback fluid={false}
                    width={1120}
                    height={674} 
                    />


                <p className="text-base mt-6 text-gray-900">{episodio.description}</p>
                <a href={`http://127.0.0.1:8000${episodio.file}`}>
                    Ver Recurso<br></br>
                </a>



                <form onSubmit={submitHandler}>


                    <div className="shadow sm:overflow-hidden sm:rounded-md m-6 text-right mr-6">





                        <div className="mt-1">
                            <textarea
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                type="text"
                                id="body"
                                rows={3}
                                className="relative block w-full    border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-700 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                placeholder="Anade un comentario!"
                            />
                        </div>


                        <button
                            type='submit'
                            className="bg-gray-900 m-6 text-white px-4 py-3 rounded-md text-sm font-medium ml-2"
                        >
                            Commentar
                        </button>
                    </div>


                </form>


                {episodio.comments && episodio.comments.map((comment) => (
                    <>

                        <div className="px-4 py-4  md:max-w-full   ">
                            <div className="grid gap-10 mx-auto sm:row-gap-10 ">
                                <div className="flex">
                                    <img
                                        className="object-cover w-20 h-20 mr-4 rounded-full shadow"
                                        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                                        alt="Person"
                                    />
                                    <div className="flex flex-col justify-center">
                                        <p className="text-lg font-bold">{comment.user}</p>
                                        <p className="text-sm text-gray-800">{comment.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </>

                ))}



            </div>



            <div className='mr-10 mt-6'>
                <h1 className="font-bold text-2xl my-6 text-white">Todos los episodios</h1>


                {curso.episodios && curso.episodios.map((epi) => (
                    <>



                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>{epi.title}</Accordion.Header>
                                    <Accordion.Body>

                                        <div className="grid grid-cols-3 gap-4">

                                            <div className="col-span-2 ">

                                                {epi.description} {curso.id} {epi.curso}

                                            </div>

                                            <div>


                                                <a href={`/solo/epi/${epi.id}/${curso.id}`}>

                                                    <button
                                                        className='bg-gray-900 text-white px-4 py-3 rounded-md text-sm font-medium ml-2'

                                                    >
                                                        Ver Episodio

                                                    </button>
                                                </a>
                                            </div>



                                        </div>



                                    </Accordion.Body>


                                </Accordion.Item>
                            </Accordion>





                            <>


                            </>

                    </>

                ))}



            </div>
        </div>
        </div>









    );
};

export default SoloEpisodioPagado;