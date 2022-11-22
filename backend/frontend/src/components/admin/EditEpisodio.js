import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Form, Button,Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../utils/Message';
import Loader from '../utils/Loader'
import { EPISODIO_UPDATE_RESET } from '../../constants/cursoConstants';
import { listEpisodioDetails, updateEpisodio } from '../../actions/cursoActions'




function EditEpisodio({ match, history }) {

    const episodioId = match.params.id

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [url, setUrl] = useState('')


    const [file, setFile] = useState('')
    const [uploadingFile, setUploadingFile] = useState(false)

    const dispatch = useDispatch()

    const episodioDetails = useSelector(state => state.episodioDetails)
    const { error, loading, episodio } = episodioDetails 


    const episodioUpdate = useSelector(state => state.episodioUpdate)
    const { error: errorUpdate, loading: loadingUpdate, success: successUpdate } = episodioUpdate

    useEffect(() => {

        if (successUpdate) {
            dispatch({ type: EPISODIO_UPDATE_RESET })
            history.push('/cursos/admin')
        } else {
            if (!episodio.title || episodio.id !== Number(episodioId)) { // Problema!!!!
                dispatch(listEpisodioDetails(episodioId))
            } else {
                setTitle(episodio.title)
                setUrl(episodio.url)
                setDescription(episodio.description)
                setFile(episodio.file)
            }
        }
    }, [dispatch, episodio, episodioId, history, successUpdate])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(updateEpisodio({
            id: episodioId,
            title,
            url,
            description,
            file,
        }))
    }

   
    const uploadFileHandler = async (e) => {
        const file = e.target.files[0]
        const formData = new FormData()

        formData.append('file', file)
        formData.append('episodio_id', episodioId) 

        setUploadingFile(true)

        try {
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data' 
                }
            }

            const { data } = await axios.post('https://techconagust.com/cursos/uploadFileEpisodio/', formData, config)
            
            setFile(data)
            setUploadingFile(false)

        } catch (error) {
            setUploadingFile(false)
        }
    }




    return (

<Container>

    <div className='mt-10'>
    <a
                            style={{ textDecoration: 'none' }}
                            href={`/epi/${episodioId}`}
                            className="flex flex-row items-center text-gray-900 hover:text-gray-600 space-x-1">
                            <svg className="fill-stroke" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.91681 7H11.0835" stroke="currentColor" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2.91681 7L5.25014 9.33333" stroke="currentColor" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2.91681 7.00002L5.25014 4.66669" stroke="currentColor" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <p className="text-sm leading-none">Atras</p>
                        </a>
                        <br></br>
                        <h1 className='mb-6 text-center'> Edit Episodio</h1>
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
                type='description'
                placeholder='Enter Description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            >
            </Form.Control>
        </Form.Group>

        <Form.Group controlId='name'>
            <Form.Label>URL</Form.Label>
            <Form.Control
                type='name'
                placeholder='Enter URL'
                value={url}
                onChange={(e) => setUrl(e.target.value)}
            >
            </Form.Control>
        </Form.Group>
        

        <Form.Group controlId='image' className='py-2'>
            <Form.Label>Recurso</Form.Label>
            <Form.Control
                type='text'
                placeholder='Image'
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
        </Form.Group>

        



        <div className='text-center py-2'>
            <Button type='submit' className='rounded'>Submit</Button>
        </div>

    </Form>
    </div>
    </Container>
    )





} export default EditEpisodio;
