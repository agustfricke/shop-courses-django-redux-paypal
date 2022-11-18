import React, { useEffect } from 'react';
import { Table, Button, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../utils/Message';
import Loader from '../utils/Loader'
import { listOrders } from '../../actions/orderActions'


function OrderListScreen({ history }) {

    const dispatch = useDispatch()

    const orderList = useSelector(state => state.orderList)
    const { loading, error, orders } = orderList

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {
        if (userInfo && userInfo.is_admin) {
            dispatch(listOrders())
        } else {
            history.push('/login')
        }
    }, [dispatch, history, userInfo])


    return (
        <Container>
        <div className='mt-10'>
            <h1 className='text-center'>SUBScripciones</h1>
            {loading
                ? (<Loader />)
                : error
                    ? (<Message variant='danger'>{error}</Message>)
                    : (
                        <Table striped bordered hover responsive className='table-sm'>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>User</th>
                                    <th>Date</th>
                                </tr>
                            </thead>

                            <tbody>
                                {orders && orders.map(order => (
                                    <tr key={order.id}>
                                        <td>{order.id}</td>
                                        <td>{order.user}</td>
                                        <td>{order.created_at?.substring(0, 10)}</td>

                                   
                                        
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    )}
        </div>
        </Container>
    )
}

export default OrderListScreen