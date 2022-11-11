import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../utils/Message';
import Loader from '../utils/Loader'
import { EPISODIO_UPDATE_RESET } from '../../constants/cursoConstants';
import { listEpisodioDetails, updateEpisodio } from '../../actions/cursoActions'




function EditEpisodio({ match, history }) {

    const episodioId = match.params.id

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const [image, setImage] = useState('')
    const [uploading, setUploading] = useState(false)

    const [video, setVideo] = useState('')
    const [uploadingVideo, setUploadingVideo] = useState(false)

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
            history.push('/admin/cursos')
        } else {
            if (!episodio.title || episodio.id !== Number(episodioId)) { // Problema!!!!
                dispatch(listEpisodioDetails(episodioId))
            } else {
                setTitle(episodio.title)
                setDescription(episodio.description)
                setImage(episodio.image)
                setVideo(episodio.video)
                setFile(episodio.file)
            }
        }
    }, [dispatch, episodio, episodioId, history, successUpdate])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(updateEpisodio({
            id: episodioId,
            title,
            description,
            image,
            video,
            file,
        }))
    }

    const uploadImageHandler = async (e) => {
        const file = e.target.files[0]
        const formData = new FormData()

        formData.append('image', file)
        formData.append('episodio_id', episodioId) 

        setUploading(true)

        try {
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data' 
                }
            }

            const { data } = await axios.post('http://127.0.0.1:8000/cursos/uploadPicEpisodio/', formData, config)
            
            setImage(data)
            setUploading(false)

        } catch (error) {
            setUploading(false)
        }
    }

    const uploadVideoHandler = async (e) => {
        const file = e.target.files[0]
        const formData = new FormData()

        formData.append('video', file)
        formData.append('episodio_id', episodioId) 

        setUploadingVideo(true)

        try {
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data' 
                }
            }

            const { data } = await axios.post('http://127.0.0.1:8000/cursos/uploadVideoEpisode/', formData, config)
            
            setVideo(data)
            setUploadingVideo(false)

        } catch (error) {
            setUploadingVideo(false)
        }
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

            const { data } = await axios.post('http://127.0.0.1:8000/cursos/uploadFileEpisodio/', formData, config)
            
            setFile(data)
            setUploadingFile(false)

        } catch (error) {
            setUploadingFile(false)
        }
    }




    return (


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
        </Form.Group>

        <Form.Group controlId='image' className='py-2'>
            <Form.Label>Video</Form.Label>
            <Form.Control
                type='text'
                placeholder='Image'
                value={video}
                onChange={(e) => setVideo(e.target.value)}
            >
            </Form.Control>
            <Form.Control
                label='Choose file'
                type='file'
                onChange={uploadVideoHandler}
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
    )





} export default EditEpisodio;
