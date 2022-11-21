import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions/userActions';
import Loader from '../utils/Loader';
import Error from '../utils/Error';
import eth from '../../media/placeholder.jpg';



export default function Login({ location, history }) {

  useEffect(() => {
    document.title = 'Tech con Agust | Login'
  }, []);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const redirect = location.search ? location.search.split('=')[1] : '/';

  const userLogin = useSelector(state => state.userLogin);
  const { error, loading, userInfo } = userLogin;


  useEffect(() => {
    if (userInfo) {
      history.push(redirect);

    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  }


  return (
    <>
      {error && <Error>{error}</Error>}
      {loading ?
        <Loader />
        : (
          <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className=' shadow-2xl'>
              <div className=' m-5 p-10'>
                <div className="w-full max-w-md space-y-8">
                  <div >
                    <img
                      className="mx-auto h-12 w-auto"
                      src={eth}
                      alt="Your Company"
                    />
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                      Iniciar Session
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
                          class="block border border-grey-light w-full p-3 rounded mb-2 placeholder-gray-600 "
                          placeholder="Email address"
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
                          class="block border border-grey-light w-full p-3 rounded mb-2 placeholder-gray-600 "
                          placeholder="Password"
                        />
                      </div>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="block w-full font-gilroy-light text-gray-200 bg-gray-700 dark:bg-dark-bg border dark:border-dark-bg   py-3  text-sm  focus:outline-none hover:bg-gray-800 focus:text-gray-900  focus:ring-1 focus:ring-gray-500 focus:border-gray-500 "
                      >

                        Iniciar Session
                      </button>
                    </div>
                  </form>
                  <div className="flex items-center justify-between">
                    <div className="text-sm">
                      <a  style={{ textDecoration: 'none' }} href="/register" className=" text-base font-semibold text-gray-900 hover:text-gray-600">
                        No tienes una cuenta? Crea una aqui!
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm">
                      <a  style={{ textDecoration: 'none' }} href="/reset-password" className="text-base font-semibold text-gray-900 hover:text-gray-600">
                        Olvidaste tu contraseña? Recuperala aqui!
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