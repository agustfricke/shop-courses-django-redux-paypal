import React, { useState } from 'react'
import { Form, Button, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import CheckoutSteps from './CheckoutSteps'

function PaymentScreen({history}) {

    const cart = useSelector(state => state.cart) 

    const dispatch = useDispatch()


    const checkoutHandler = () => {
        history.push('/placeorder')
      }

    return (
        <>
            <CheckoutSteps step1 step2 step3/>

            <Form >
                <Button onClick={checkoutHandler} type='submit' className='rounded'>
                    Continue
                </Button>
            </Form>
            </>
    )
}

export default PaymentScreen;
