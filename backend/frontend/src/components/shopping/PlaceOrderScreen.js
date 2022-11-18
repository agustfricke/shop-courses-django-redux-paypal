import React, { useEffect } from 'react'
import { Button, Row, Col, ListGroup, Image, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../utils/Message'
import CheckoutSteps from './CheckoutSteps'
import { createOrder } from '../../actions/orderActions'
import { ORDER_CREATE_RESET } from '../../constants/orderConstants'

function PlaceOrderScreen({ history }) {

    const orderCreate = useSelector(state => state.orderCreate)
    const { order, error, success } = orderCreate

    const dispatch = useDispatch()



    useEffect(() => {
        if (success) {
            history.push(`/order/${order.id}`)
            dispatch({ type: ORDER_CREATE_RESET })
        }
    }, [success, history])

    const placeOrder = () => {
        dispatch(createOrder())
    }

    return (
        <div>
            <CheckoutSteps step1 step2 step3 step4 />

            <Row>

                <Col md={4}>
                    <Card>
                       

                            <ListGroup.Item>
                                <div className="d-grid gap">
                                    <h1>Son 75 dolares porfa</h1>
                                    <Button
                                        type='button'
                                        className='btn-block'
                                        onClick={placeOrder}
                                    >
                                        Place Order
                                    </Button>
                                </div>
                            </ListGroup.Item>

                    </Card>
                </Col>
            </Row>

        </div>
    )
}

export default PlaceOrderScreen;
