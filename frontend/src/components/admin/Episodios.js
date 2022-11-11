import React, { useState, useEffect } from "react";
import Message from '../utils/Message';
import Loader from '../utils/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { listCursoDetails, episodioCreate } from '../../actions/cursoActions'
import { Table, Button, Row, Col, Container, Form } from 'react-bootstrap'
import { FaRegEdit, FaTrash, FaPlusSquare } from 'react-icons/fa';
import { CURSO_CREATE_EPISODIO_RESET } from "../../constants/cursoConstants";






export default function Episodios ({ match, history }) {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const dispatch = useDispatch()

    const detailsCurso = useSelector(state => state.detailsCurso)
    const { loading, error, curso } = detailsCurso

    const createEpisodio = useSelector(state => state.createEpisodio)
    const { loading: loadingEpisodio, error: errorEpisodio, success: successEpisodio } = createEpisodio

    useEffect(() => {
        if (successEpisodio) {
            setTitle('')
            setDescription('')
            dispatch({ type: CURSO_CREATE_EPISODIO_RESET })
        }

        dispatch(listCursoDetails(match.params.id))

    }, [dispatch, match, successEpisodio])


    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(episodioCreate(
            match.params.id, {
            title,
            description
        }
        ))
    }


    return (
        <div className="grid gap-4 grid-cols-2">
            <div>
        <h3>
        <span className="block xl:inline">EPISODIOS DE</span>{' '}
             <span className="block text-indigo-600 xl:inline">{curso.title}</span>{' '}
            
            </h3>
        <br></br>

        <Table striped bordered hover responsive className='table-sm'>
                            <thead>
                                <tr>
                                    <th>Pic</th>
                                    <th>Titulo</th>
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

                                        
                                        <td className='text-center'>
                                        <a href={`/#/episodio/${epi.id}/form`}>

                                            <button
                                            className='bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium ml-2'

                                            >
                                                <FaRegEdit size={20}/>

                                            </button>
                                            </a>

                                            <a href={`/#/soloEpisodio/${epi.id}`}>

                                            <button
                                            className='bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium ml-2'

                                            >
                                                Ver

                                            </button>
                                            </a>


                                            <button
                                            className='bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium ml-2'
                                           >
                                            <FaTrash size={20}/>
                                            </button>

                                           

                                            
                                        </td>
                                    </tr>
                                ))}


                            </tbody>

                        </Table>


                  </div>

                  <div className="ml-8">
        <center>
                  <h3>
        <span className="block xl:inline">CREAR </span>{' '}
             <span className="block text-indigo-600 xl:inline">EPISODIO</span>{' '}
            
            </h3>
            </center>
        <br></br>
                    
                  <Form onSubmit={submitHandler}>

                    <Form.Group controlId='name'>
                        <Form.Label>Titulo</Form.Label>
                        <Form.Control
                            type='name'
                            placeholder='Enter name'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='description' className='py-2'>
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                            type='description'
                            placeholder='Enter Description'
                        >
                        </Form.Control>
                    </Form.Group>  


                    <div className='text-center py-2'>
                        <button type='submit' 
                        className='bg-gray-900 text-white px-5 py-3 rounded-md text-sm font-medium ml-2'
                        >AGREGAR</button>
                    </div>

                    </Form>
                  </div>
        </div>

    )
}