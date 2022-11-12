import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { Reset } from '../../actions/userActions'



const ResetPassword = ({ reset_password }) => {
    
    const [email, setEmail] = useState('')

    const dispatch = useDispatch()

    const passwordRest = useSelector(state => state.passwordRest)
    const { error, loading, rest } = passwordRest


    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(Reset(email))
      }



    return (
        <div className='container mt-5'>
            <h1>Request Password Reset:</h1>
            <form onSubmit={submitHandler}>
                <div className='form-group'>
                    <input
                        className='form-control'
                        type='email'
                        placeholder='Email'
                        name='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <button className='btn btn-primary' type='submit'>Reset Password</button>
            </form>
        </div>
    );
};

export default ResetPassword;
