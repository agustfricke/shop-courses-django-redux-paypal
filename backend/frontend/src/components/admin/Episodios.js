import React, { useState, useEffect } from "react";
import Message from '../utils/Message';
import Loader from '../utils/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { listCursoDetails, episodioCreate, deleteEpisodio } from '../../actions/cursoActions'
import { Table, Button, Row, Col, Container, Form } from 'react-bootstrap'
import { FaRegEdit, FaTrash, FaPlusSquare } from 'react-icons/fa';
import { CURSO_CREATE_EPISODIO_RESET } from "../../constants/cursoConstants";






export default function Episodios ({ match, history }) {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [url, setUrl] = useState('')



    const dispatch = useDispatch()

    const detailsCurso = useSelector(state => state.detailsCurso)
    const { loading, error, curso } = detailsCurso

    const createEpisodio = useSelector(state => state.createEpisodio)
    const { loading: loadingEpisodio, error: errorEpisodio, success: successEpisodio } = createEpisodio

    const episodioDelete = useSelector(state => state.episodioDelete)
    const { loading: loadingDelete, error: errorDelete, success: successDelete } = episodioDelete

    useEffect(() => {
        if (successEpisodio) {
            setUrl('')
            setTitle('')
            setDescription('')
            dispatch({ type: CURSO_CREATE_EPISODIO_RESET })
        }

        dispatch(listCursoDetails(match.params.id))

    }, [dispatch, match, successEpisodio, successDelete])

    const deleteHandler = (id) => {
        if (window.confirm('Are you shure you want to delete this Curso?')) {
            dispatch(deleteEpisodio(id))
        }
    }


    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(episodioCreate(
            match.params.id, {
            title,
            url,
            description,
        }
        ))
    }


    return (
        <Container>
            <div className="mt-10">

            <a
                            style={{ textDecoration: 'none' }}
                            href="/admin/cursos"
                            className="flex flex-row items-center text-gray-900 hover:text-gray-600 space-x-1">
                            <svg className="fill-stroke" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.91681 7H11.0835" stroke="currentColor" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2.91681 7L5.25014 9.33333" stroke="currentColor" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2.91681 7.00002L5.25014 4.66669" stroke="currentColor" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <p className="text-sm leading-none">Atras</p>
                        </a>
                        <br></br>

        <div className="grid gap-4 grid-cols-2">
            <div >
        <h3>
        <span className="block xl:inline">EPISODIOS DE</span>{' '}
             <span className="block text-indigo-600 xl:inline">{curso.title}</span>{' '}
            
            </h3>
        <br></br>

        <Table striped bordered hover responsive className='table-sm'>
                            <thead>
                                <tr>
                                    <th>Titulo</th>
                                    <th>Acciones</th>

                                </tr>
                            </thead>

                            <tbody>
                                {curso.episodios && curso.episodios.map((epi) => (


                                    <tr key={epi.id}>
                                        <td>{epi.title}</td>

                                        <td className=''>
                                        <a href={`/episodio/${epi.id}/form`}>

                                            <button
                                            className='bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium ml-2'

                                            >
                                                <FaRegEdit size={20}/>

                                            </button>
                                            </a>

                                            


                                            <button
                                            onClick={() => deleteHandler(epi.id)}
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

                    <Form.Group controlId='description' className='py-2'>
                        <Form.Label>URL</Form.Label>
                        <Form.Control
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                            type='description'
                            placeholder='URL'
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
        </div>

        </Container>

    )
}