import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import {Confirm} from '../../actions/userActions'
import { useDispatch, useSelector } from 'react-redux'


const ResetPasswordConfirm = ({ match }) => {

    const dispatch = useDispatch()


    const [re_password, setNewPassword] = useState('');
    const [re_new_password, setre_new_password] = useState('');

    const passwordConfirm = useSelector(state => state.passwordConfirm)
    const { error, loading, success } = passwordConfirm


    const submitHandler = (e) => {
        e.preventDefault()

        dispatch(Confirm(match.params.uid,match.params.token, re_password, re_new_password))
      }


    return (
        <div className='container mt-5'>
            <form onSubmit={submitHandler}>
            <div className='form-group'>
                    <input
                        className='form-control'
                        type='password'
                        placeholder='New Password'
                        name='new_password'
                        value={re_password}
                        onChange={(e) => setNewPassword(e.target.value)}
                        minLength='6'
                        required
                    />
                </div>
                <div className='form-group'>
                    <input
                        className='form-control'
                        type='password'
                        placeholder='Confirm New Password'
                        name='re_new_password'
                        value={re_new_password}
                        onChange={(e) => setre_new_password(e.target.value)}
                        minLength='6'
                        required
                    />
                </div>
                <button className='btn btn-primary' type='submit'>Reset Password</button>
            </form>
        </div>
    );
};

export default ResetPasswordConfirm
