import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Carousel, Image } from 'react-bootstrap'

import Loader from '../utils/Loader'
import Message from '../utils/Message'
import { listLastCursos } from "../../actions/cursoActions";


function LastCursoCarousel() {
    
    const dispatch = useDispatch()

    const lastCurso = useSelector(state => state.lastCurso)
    const { error, loading, cursos } = lastCurso

    useEffect(() => {
        dispatch(listLastCursos())
    }, dispatch)

    return (loading ? <Loader />
        : error ? <Message>{error}</Message>
            : (
                <Carousel variant='dark' interval={2500}>
                    {cursos.map(curso => (
                        <Carousel.Item key={curso.id} >

                            <Link to={`/curso/${curso.id}`}>
                                <center>
                                <Image
                                    src={`http://127.0.0.1:8000${curso.image}`}
                                    fluid
                                    style={{ maxHeight: "350px" }}
                                />
                                </center>
                                <Carousel.Caption>
                                    <h5>{curso.title}</h5>
                                    <h6>Nuevo Curso</h6>
                                </Carousel.Caption>

                            </Link>
                        </Carousel.Item>
                    ))}
                </Carousel>
            )
    )
}

export default LastCursoCarousel