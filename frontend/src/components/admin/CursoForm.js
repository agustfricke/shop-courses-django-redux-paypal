import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Form, Button, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../utils/Message';
import Loader from '../utils/Loader'
import { listCursoDetails, updateCurso } from '../../actions/cursoActions'
import { CURSO_UPDATE_RESET } from '../../constants/cursoConstants';



function CursoForm({ match, history }) {

    const cursoId = match.params.id

    const [title, setTitle] = useState('')
    const [trailer, setTrailer] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const [uploading, setUploading] = useState(false)

    const [file, setFile] = useState('')
    const [uploadingFile, setUploadingFile] = useState(false)


    const dispatch = useDispatch()

    const detailsCurso = useSelector(state => state.detailsCurso)
    const { error, loading, curso } = detailsCurso

    const cursoUpdate = useSelector(state => state.cursoUpdate)
    const { error: errorUpdate, loading: loadingUpdate, success: successUpdate } = cursoUpdate

    useEffect(() => {

        if (successUpdate) {
            dispatch({ type: CURSO_UPDATE_RESET })
            history.push('/cursos/admin')
        } else {
            if (!curso.title || curso.id !== Number(cursoId)) {
                dispatch(listCursoDetails(cursoId))
            } else {
                setTitle(curso.title)
                setTrailer(curso.trailer)
                setDescription(curso.description)
                setImage(curso.image)
                setCategory(curso.category)
                setFile(curso.file)
            }
        }
    }, [dispatch, curso, cursoId, history, successUpdate])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(updateCurso({
            id: cursoId,
            title,
            description,
            trailer,
            image,
            category,
            file,

        }))
    }

    const uploadFileHandler = async (e) => {
        const file = e.target.files[0]
        const formData = new FormData()

        formData.append('file', file)
        formData.append('curso_id', cursoId) 

        setUploadingFile(true)

        try {
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data' 
                }
            }

            const { data } = await axios.post('http://127.0.0.1:8000/cursos/uploadFile/', formData, config)
            
            setFile(data)
            setUploadingFile(false)

        } catch (error) {
            setUploadingFile(false)
        }
    }


    const uploadImageHandler = async (e) => {
        const file = e.target.files[0]
        const formData = new FormData()

        formData.append('image', file)
        formData.append('curso_id', cursoId) 

        setUploading(true)

        try {
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data' 
                }
            }

            const { data } = await axios.post('http://127.0.0.1:8000/cursos/image/', formData, config)
            
            setImage(data)
            setUploading(false)

        } catch (error) {
            setUploading(false)
        }
    }

    return (
        <Container>
             
        <div className='mt-10'>

        <a
                            style={{ textDecoration: 'none' }}
                            href="cursos/admin/"
                            className="flex flex-row items-center text-gray-900 hover:text-gray-600 space-x-1">
                            <svg className="fill-stroke" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.91681 7H11.0835" stroke="currentColor" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2.91681 7L5.25014 9.33333" stroke="currentColor" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2.91681 7.00002L5.25014 4.66669" stroke="currentColor" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <p className="text-sm leading-none">Atras</p>
                        </a>
            
                <h1 className='text-center'>Curso Formulario</h1>
                {loadingUpdate && <Loader />}
                {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
                {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message>
                    : (
                        <Form onSubmit={submitHandler}>

                            <Form.Group controlId='name'>
                                <Form.Label>Name</Form.Label>
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
                                    type='description'
                                    placeholder='Enter Description'
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId='description' className='py-2'>
                                <Form.Label>Trailer URL</Form.Label>
                                <Form.Control
                                    type='description'
                                    placeholder='Trailer URL'
                                    value={trailer}
                                    onChange={(e) => setTrailer(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>


                            <Form.Group controlId='image' className='py-2'>
                                <Form.Label>Image</Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder='Image'
                                    value={image}
                                    onChange={(e) => setImage(e.target.value)}
                                >
                                </Form.Control>
                                <Form.Control
                                    label='Choose file'
                                    type='file'
                                    onChange={uploadImageHandler}
                                >
                                </Form.Control>
                                {uploading && <Loader />}
                            </Form.Group>

                            <Form.Group controlId='image' className='py-2'>
                                <Form.Label>File</Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder='File'
                                    value={file}
                                    onChange={(e) => setFile(e.target.value)}
                                >
                                </Form.Control>
                                <Form.Control
                                    label='Choose file'
                                    type='file'
                                    onChange={uploadFileHandler}
                                >
                                </Form.Control>
                                {uploading && <Loader />}
                            </Form.Group>

                            <Form.Group controlId='category' className='py-2'>
                                <Form.Label>Category</Form.Label>
                                <Form.Control
                                    type='category'
                                    placeholder='Enter Category'
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>


                            <div className='text-center py-2'>
                                <button type='submit'
                                className= 'bg-gray-700 py-3 px-5 text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2' >Submit</button>
                            </div>

                        </Form>
                    )}
        </div>
        </Container>
    )
}

export default CursoForm;
