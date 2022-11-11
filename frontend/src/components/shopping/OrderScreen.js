import React, { useState, useEffect } from 'react'
import { Button, Row, Col, ListGroup, Image, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../utils/Message'
import Loader from '../utils/Loader'
import { getOrderDetails, payOrder, deliverOrder } from '../../actions/orderActions'
import { ORDER_PAY_RESET, ORDER_DELIVER_RESET } from '../../constants/orderConstants'


function OrderScreen({ match, history }) { //history for make sure that if a user is not logged in, he can't see deliver page
    const orderId = match.params.id
    const dispatch = useDispatch()


    const orderDetails = useSelector(state => state.orderDetails)
    const { order, error, loading } = orderDetails

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    if (!loading && !error) {
        order.itemsPrice = order.order_items.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)
    }



    useEffect(() => {

        if(!userInfo){
            history.push('/login')
        }

        if (!order || order.id !== Number(orderId) ) {
            dispatch(getOrderDetails(orderId))
        } else if (!order.is_paid) { // Check the state here of our order pay
        }
    }, [dispatch, order, orderId])





    return loading ? (
        <Loader />
    ) : error ? (
        <Message variant='danger'>{error}</Message>
    ) : (
        <div>
            <h1>Order: {orderId}</h1>
            <Row>
                <Col md={8}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h2>Shipping</h2>
                            <p>Name: {order.user.name}</p>
                            <p>Email: <a href={`mailto:${order.user.email}`}>{order.user.username}</a></p>
                            <p>
                                <strong>Shipping: </strong>
                            </p>

                        </ListGroup.Item>

                        <ListGroup.Item>
                            <h2>Payment Method</h2>
                            <p>
                                <strong>Method: </strong>
                            </p>

                        </ListGroup.Item>

                        <ListGroup.Item>
                            <h2>Items</h2>
                            {order.order_items.lenght === 0 ? <Message>
                                Order is empty
                            </Message> : (
                                <ListGroup variant='flush'>
                                    {order.order_items.map((item, index) => (
                                        <ListGroup.Item key={index}>
                                            <Row>
                                                <Col md={1}>
                                                    <Link to={`/product/${item.product}`}>
                                                        <Image src={item.image} alt={item.name} fluid rounded />
                                                    </Link>
                                                </Col>

                                                <Col md={6}>
                                                    <Link to={`/product/${item.product}`} className='text-link'>
                                                        {item.name}
                                                    </Link>
                                                </Col>

                                                <Col md={5}>
                                                    {item.quantity} X ${item.price} = ${(item.quantity * item.price).toFixed(2)}
                                                </Col>

                                            </Row>
                                        </ListGroup.Item>
                                    ))}
                                </ListGroup>
                            )}
                        </ListGroup.Item>
                    </ListGroup>

                </Col>

                <Col md={4}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h2>Summary</h2>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col md={8}>Items:</Col>
                                    <Col>${order.itemsPrice}</Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col md={8}>Shipping:</Col>
                                    <Col>${order.shipping_price}</Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col md={8}>Total:</Col>
                                    <Col>${order.total_price}</Col>
                                </Row>
                            </ListGroup.Item>

                               
                        </ListGroup>
                           

                    </Card>
                </Col>
            </Row>

        </div>
    )
}

export default OrderScreen;
