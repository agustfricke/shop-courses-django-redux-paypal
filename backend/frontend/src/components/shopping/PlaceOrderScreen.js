import React, { useEffect } from 'react'
import { Button, Row, Col, ListGroup, Image, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../utils/Message'
import CheckoutSteps from './CheckoutSteps'
import { premiumUser } from '../../actions/userActions'

function PlaceOrderScreen({ history }) {

    const userPremum = useSelector(state => state.userPremum)
    const { order, error, success } = userPremum

    const dispatch = useDispatch()

    useEffect(() => {
          }, [dispatch, history, success])
    
      const submitHandler = (e) => {
        e.preventDefault()
        history.push('/')
          dispatch(premiumUser(success))
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
                                        onClick={submitHandler}
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
