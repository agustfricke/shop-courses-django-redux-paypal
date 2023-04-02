import React, { useEffect } from 'react';
import { Table, Button, Row, Col, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../utils/Message';
import Loader from '../utils/Loader'
import { listCursos, deleteCurso, createCurso } from '../../actions/cursoActions'
import { FaRegEdit, FaTrash, FaPlusSquare } from 'react-icons/fa';


import { CURSO_CREATE_RESET } from '../../constants/cursoConstants'


function CursoListScreen({ history }) {


    const dispatch = useDispatch()

    const cursoList = useSelector(state => state.cursoList)
    const { loading, error, cursos } = cursoList

    const cursoDelete = useSelector(state => state.cursoDelete)
    const { loading: loadingDelete, error: errorDelete, success: successDelete } = cursoDelete

    const cursoCreate = useSelector(state => state.cursoCreate)
    const { loading: loadingCreate, error: errorCreate, success: successCreate, curso: createdCurso } = cursoCreate

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {
        dispatch({ type: CURSO_CREATE_RESET })

        if (!userInfo.is_admin) {
            history.push('/login')
        }

        if (successCreate) {
            history.push(`/cursos/${createdCurso.id}/form`)
        } else {
            dispatch(listCursos())
        }

    }, [dispatch, history, userInfo, successDelete, successCreate, createCurso])

    const deleteHandler = (id) => {
        if (window.confirm('Are you shure you want to delete this Curso?')) {
            dispatch(deleteCurso(id))
        }
    }

    const createCursoHandler = (curso) => {
        dispatch(createCurso())
    }




    return (
        <Container>
            <div className='mt-10 mb-4'>
            <Row>
                <Col sm={10}>
                    <h1>Cursos</h1>
                </Col>
                <Col sm={2}>
                    <button
                    onClick={createCursoHandler}
                    size='sm' 
                    className= 'bg-gray-700 py-3 px-5 mb-5 text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2' 
                    >
                        CREAR CURSO
                    </button>
                </Col>
            </Row>

            {loadingDelete && <Loader />}
            {errorDelete && <Message variant='danger'>{errorDelete}</Message>}

            {loadingCreate && <Loader />}
            {errorCreate && <Message variant='danger'>{errorCreate}</Message>}

            {loading
                ? (<Loader />)
                : error
                    ? (<Message variant='danger'>{error}</Message>)
                    : (

                        <Table striped bordered hover responsive className='table-sm'>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Pic</th>
                                    <th>Name</th>
                                    <th>Category</th>
                                    <th>Episodios</th>
                                    <th></th>
                                </tr>
                            </thead>

                            <tbody>
                                {cursos.map(curso => (

                                    <tr key={curso.id}>
                                        <td>{curso.id}</td>
                                        <td><img
                                            className="h-8 w-8 rounded-full"
                                            src={`http://127.0.0.1:8000/${curso.image}`}
                                            alt=""
                                        /></td>

                                        <td>{curso.title}</td>
                                        <td>{curso.category}</td>
                                        <td>
                                        <a href={`/epi/${curso.id}`}>

                                    <button
                                    className='bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium ml-2'

                                    >
                                        <FaPlusSquare size={20}/>

                                    </button>
                                    </a>
                                        </td>

                                        
                                        <td className='text-center'>
                                        <a href={`/cursos/${curso.id}/form`}>

                                            <button
                                            className='bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium ml-2'

                                            >
                                                <FaRegEdit size={20}/>

                                            </button>
                                            </a>


                                            <button
                                            onClick={() => deleteHandler(curso.id)}
                                            className='bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium ml-2'
                                           >
                                            <FaTrash size={20}/>
                                            </button>

                                            

                                            
                                        </td>
                                    </tr>
                                ))}

                            </tbody>

                        </Table>
                    )}
                    </div>

        </Container>
    )
}

export default CursoListScreen
