import React, { useState, useEffect } from "react";
import Message from '../utils/Message';
import Loader from '../utils/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { listCursoDetails } from '../../actions/cursoActions'
import { Form, Button } from 'react-bootstrap'




export default function Episodios ({ match, history }) {

    const dispatch = useDispatch()

    const detailsCurso = useSelector(state => state.detailsCurso)
    const { loading, error, curso } = detailsCurso

    useEffect(() => {
        dispatch(listCursoDetails(match.params.id))
    }, [dispatch, match])


    return (
        <div className="grid gap-4 grid-cols-2">
            <div>
        <h1>AGREGA Y CONFIGURA LOS EPIOSDIOS DEL CURSO</h1>
        <br></br>

        <h3>{curso.title}</h3>

        <li>Episodio 1</li>
        <img
                  className="img-fluid flex justify-center"
                  style={{ maxHeight: "150px" }}
                    src={`http://127.0.0.1:8000${curso.image}`}

                  />


        <li>Episodio 2</li>

                  <img
                  className="img-fluid flex justify-center"
                  style={{ maxHeight: "150px" }}
                    src={`http://127.0.0.1:8000${curso.image}`}

                  />

                <li>Episodio 2</li>

                <img
                className="img-fluid flex justify-center"
                style={{ maxHeight: "150px" }}
                src={`http://127.0.0.1:8000${curso.image}`}

                />

                <li>Episodio 2</li>

                <img
                className="img-fluid flex justify-center"
                style={{ maxHeight: "150px" }}
                src={`http://127.0.0.1:8000${curso.image}`}

                />

                <li>Episodio 2</li>

                <img
                className="img-fluid flex justify-center"
                style={{ maxHeight: "150px" }}
                src={`http://127.0.0.1:8000${curso.image}`}

                />
                  </div>

                  <div>

                  <h1>AGREGA CAPITULOS A TU CURSO!</h1>
                    
                  <Form >

                    <Form.Group controlId='name'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type='name'
                            placeholder='Enter name'
                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='description' className='py-2'>
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            type='description'
                            placeholder='Enter Description'
                        >
                        </Form.Control>
                    </Form.Group>

                   

                    <Form.Group controlId='image' className='py-2'>
                        <Form.Label>Image Placeholder</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Image PNG JPG'
                        >
                        </Form.Control>
                        <Form.Control
                            label='Choose file'
                            type='file'
                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='image' className='py-2'>
                        <Form.Label>Video</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Video MP4'
                        >
                        </Form.Control>
                        <Form.Control
                            label='Choose file'
                            type='file'
                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='image' className='py-2'>
                        <Form.Label>Recursos .zip</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='File ZIP'
                        >
                        </Form.Control>
                        <Form.Control
                            label='Choose file'
                            type='file'
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