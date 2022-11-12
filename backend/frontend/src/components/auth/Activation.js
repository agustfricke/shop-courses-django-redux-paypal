import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { activation } from '../../actions/userActions';

const Activate = ({ match }) => {

    const dispatch = useDispatch()

    const userActivation = useSelector(state => state.userActivation)
    const { error, loading, success } = userActivation

    const verify_account = (e) => {

        dispatch(activation(match.params.uid, match.params.token))
      }


    return (
        <div className='container'>
            <div 
                className='d-flex flex-column justify-content-center align-items-center'
                style={{ marginTop: '200px' }}
            >
                <h1>Verify your Account:</h1>
                <form >
                <button
                    onClick={verify_account}

                    style={{ marginTop: '50px' }}
                    type='button'
                    className='btn btn-primary'
                >
                    Verify
                </button>
                </form>
            </div>
        </div>
    );
};

export default Activate