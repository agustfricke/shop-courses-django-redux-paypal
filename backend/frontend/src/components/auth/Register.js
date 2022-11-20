import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../actions/userActions';
import Loader from '../utils/Loader';
import eth from '../../media/placeholder.jpg';
import Error from '../utils/Error';


export default function Register({ location, history }) {

  const [first_name, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [user_name, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [re_password, setRePassword] = useState('');
  const [message, setMessage] = useState('');

  const dispatch = useDispatch()

  const redirect = location.search ? location.search.split('=')[1] : '/';

  const userRegister = useSelector(state => state.userRegister);
  const { error, loading, success } = userRegister;


  useEffect(() => {
    if (success) {
      history.push(redirect);
    }
  }, [history, success, redirect]);



  const submitHandler = (e) => {
    e.preventDefault();

    if (password !== re_password) {
      setMessage('Passwords must match ');
    } else {
      dispatch(register(first_name, email, user_name, password, re_password));
    }
  }



  return (
    <>
      {message && <Error>{message}</Error>}
      {error && <Error>{error}</Error>}
      {loading ?
        <Loader />
        : (
          <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className=' shadow-2xl'>
              <div className=' m-5 p-10'>
                <div className="w-full max-w-md space-y-8">
                  <div>
                    <img
                      className="mx-auto h-12 w-auto"
                      src={eth}
                      alt="Your Company"
                    />
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                      Crear una cuenta
                    </h2>
                  </div>
                  <form onSubmit={submitHandler} className="mt-8 space-y-6" action="#" method="POST">
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="">
                      <div>
                        <label htmlFor="email-address" className="sr-only">
                          Email address
                        </label>
                        <input
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          className=" border-grey-light w-full p-3 rounded mb-2 placeholder-gray-600"
                          placeholder="Correo Electronico"
                        />
                      </div>
                      <br></br>
                      <div>
                        <label htmlFor="user_name" className="sr-only">
                          Username
                        </label>
                        <input
                          value={user_name}
                          onChange={(e) => setUserName(e.target.value)}
                          id="user_name"
                          type="text"
                          required
                          className=" border-grey-light w-full p-3 rounded mb-2 placeholder-gray-600"
                          placeholder="Nombre de usuario"
                        />
                      </div>
                      <br></br>
                      <div>
                        <label htmlFor="user_name" className="sr-only">
                          Nombre
                        </label>
                        <input
                          value={first_name}
                          onChange={(e) => setFirstName(e.target.value)}
                          type="text"
                          required
                          className=" border-grey-light w-full p-3 rounded mb-2 placeholder-gray-600"
                          placeholder="Nombre y Apellido"
                        />
                      </div>
                      <br></br>
                      <div>
                        <label htmlFor="password" className="sr-only">
                          Password
                        </label>
                        <input
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          id="password"
                          name="password"
                          type="password"
                          autoComplete="current-password"
                          required
                          className=" border-grey-light w-full p-3 rounded mb-2 placeholder-gray-600"
                          placeholder="Contraseña"
                        />
                      </div>
                      <br></br>
                      <div>
                        <label htmlFor="password" className="sr-only">
                          Repate Password
                        </label>
                        <input
                          value={re_password}
                          onChange={(e) => setRePassword(e.target.value)}
                          id="confirmPassword"
                          name="password"
                          type="password"
                          autoComplete="current-password"
                          required
                          className=" border-grey-light w-full p-3 rounded mb-2 placeholder-gray-600"
                          placeholder="Confirmar Contraseña"
                        />
                      </div>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="block w-full font-gilroy-light text-gray-200 bg-gray-700 dark:bg-dark-bg border dark:border-dark-bg   py-3  text-sm  focus:outline-none hover:bg-gray-800 focus:text-gray-900  focus:ring-1 focus:ring-gray-500 focus:border-gray-500 "
                      >

                        Crear cuenta
                      </button>
                    </div>
                  </form>
                  <div className="flex items-center justify-between">
                    <div className="text-sm">
                      <a style={{ textDecoration: 'none' }} href="/login" className=" text-base font-semibold text-gray-900 hover:text-gray-600">
                        Tienes una cuenta? Inicia session aqui!
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
    </>
  )
}