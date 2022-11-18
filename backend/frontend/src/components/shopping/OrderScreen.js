import React, { useState, useEffect } from 'react'
import { Button, Row, Col, ListGroup, Image, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../utils/Message'
import Loader from '../utils/Loader'
import { getOrderDetails } from '../../actions/orderActions'


function OrderScreen({ match, history }) { 
    
    const orderId = match.params.id
    const dispatch = useDispatch()


    const orderDetails = useSelector(state => state.orderDetails)
    const { order, error, loading } = orderDetails

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin




    useEffect(() => {

        if(!userInfo){
            history.push('/login')
        }

        if (!order || order.id !== Number(orderId) ) {
            dispatch(getOrderDetails(orderId))
        } else if (!order.is_paid) { 
        }
    }, [dispatch, order, orderId])





    return loading ? (
        <Loader />
    ) : error ? (
        <Message variant='danger'>{error}</Message>
    ) : (
        <div>
            <h1>Order: {orderId}</h1>
           <h1>Felicitaciones ya tienes membresia de por vida!</h1>

        </div>
    )
}

export default OrderScreen;
