import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Form, Button,Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../utils/Message';
import Loader from '../utils/Loader'
import { URL_UPDATE_RESET } from '../../constants/orderConstants';
import { updateURL, listURLDetails } from '../../actions/orderActions'




function VimeoForm({ match, history }) {

    const urlId = match.params.id

    const [title, setTitle] = useState('')
    const [url, setURL] = useState('')


    const dispatch = useDispatch()

    const urlDetails = useSelector(state => state.urlDetails)
    const { error, loading, urlSolo } = urlDetails 


    const urlUpdate = useSelector(state => state.urlUpdate)
    const { error: errorUpdate, loading: loadingUpdate, success: successUpdate } = urlUpdate

    useEffect(() => {

        if (successUpdate) {
            dispatch({ type: URL_UPDATE_RESET })
            history.push('/admin/vimeo')
        } else {
            if (!urlSolo.title  || urlSolo.id !== Number(urlId)) { 
                dispatch(listURLDetails(urlId))
            } else {
                setTitle(urlSolo.title)
                setURL(urlSolo.url)
            }
        }
    }, [dispatch, urlSolo, urlId, history, successUpdate])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(updateURL({
            id: urlId,
            title,
            url,
        }))
    }

   



return (

<Container>

    <div className='mt-10'>
    <a
                            style={{ textDecoration: 'none' }}
                            href={`/admin/vimeo`}
                            className="flex flex-row items-center text-gray-900 hover:text-gray-600 space-x-1">
                            <svg className="fill-stroke" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.91681 7H11.0835" stroke="currentColor" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2.91681 7L5.25014 9.33333" stroke="currentColor" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2.91681 7.00002L5.25014 4.66669" stroke="currentColor" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <p className="text-sm leading-none">Atras</p>
                        </a>
                        <br></br>
                        <h1 className='mb-6 text-center'> Edit URL</h1>
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
            <Form.Label>URL</Form.Label>
            <Form.Control
                type='description'
                placeholder='Enter Description'
                value={url}
                onChange={(e) => setURL(e.target.value)}
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





} export default VimeoForm;
