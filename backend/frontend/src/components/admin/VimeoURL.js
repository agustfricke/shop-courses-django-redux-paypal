import React, { useState, useEffect } from "react";
import Message from '../utils/Message';
import Loader from '../utils/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { listURL, deleteURL, createURL } from '../../actions/orderActions'
import { Table, Button, Row, Col, Container, Form } from 'react-bootstrap'
import { FaRegEdit, FaTrash, FaPlusSquare } from 'react-icons/fa';
import {URL_CREATE_RESET} from '../../constants/orderConstants'






export default function Vimeo ({ match, history }) {

    const [title, setTitle] = useState('')
    const [url, setURL] = useState('')


    const dispatch = useDispatch()

    const urlList = useSelector(state => state.urlList)
    const { loading, error, urls } = urlList

    const urlCreate = useSelector(state => state.urlCreate)
    const { loading: loadingURL, error: errorURL, success: successURL } = urlCreate

    const urlDelete = useSelector(state => state.urlDelete)
    const { loading: loadingDelete, error: errorDelete, success: successDelete } = urlDelete


    useEffect(() => {
        if (successURL) {
            setTitle('')
            setURL('')
            dispatch({ type: URL_CREATE_RESET })
        }
        dispatch(listURL())
    }, [dispatch, match, successDelete, successURL])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(createURL(title, url))
    }

    const deleteHandler = (id) => {
        if (window.confirm('Are you shure you want to delete this Curso?')) {
            dispatch(deleteURL(id))
        }
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
        <span className="block xl:inline">URL OCULTAS</span>{' '}
            
            </h3>
        <br></br>

        <Table striped bordered hover responsive className='table-sm'>
                            <thead>
                                <tr>
                                    <th>URL</th>
                                    <th>Titulo</th>
                                    <th>Acciones</th>

                                </tr>
                            </thead>

                            <tbody>
                                {urls && urls.map((url) => (


                                    <tr key={url.id}>
                                        <td>{url.url}</td>
                                        <td>{url.title}</td>




                                        
                                        <td className=''>
                                        <a href={`/URL/${url.id}/form`}>

                                            <button
                                            className='bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium ml-2'

                                            >
                                                <FaRegEdit size={20}/>

                                            </button>
                                            </a>

                                            


                                            <button
                                            onClick={() => deleteHandler(url.id)}
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
             <span className="block text-indigo-600 xl:inline">URL OCULTA</span>{' '}
            
            </h3>
            </center>
        <br></br>
                    
                  <Form onSubmit={submitHandler}>

                    <Form.Group controlId='name'>
                        <Form.Label>Titulo</Form.Label>
                        <Form.Control
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                            type='name'
                            placeholder='Enter name'
                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='description' className='py-2'>
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                        value={url}
                        onChange={(e) => setURL(e.target.value)}
                            type='description'
                            placeholder='Enter URL'
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