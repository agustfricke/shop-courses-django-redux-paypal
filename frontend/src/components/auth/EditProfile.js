import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import { getUserDetails, updateUserProfile } from '../../actions/userActions'
import { USER_UPDATE_PROFILE_RESET } from '../../constants/userConstants'
import Loader from '../utils/Loader'
import Message from "../utils/Message";




export default function EditProfile({ history }) {

  useEffect(() => {
    document.title = 'Tech con Agust | Edit Profile'
  }, []);

  const [user_name, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [bio, setBio] = useState('')
  const [image, setImage] = useState('')
  const [message, setMessage] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [uploading, setUploading] = useState(false)


  const dispatch = useDispatch(history)

  const userDetails = useSelector(state => state.userDetails)
  const { error, loading, user } = userDetails

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const userUpdateProfile = useSelector(state => state.userUpdateProfile)
  const { success } = userUpdateProfile



  useEffect(() => {
    if (!userInfo.email === "") {
      history.push('/login')
    } else {
      if (!user || !user.user_name || success || userInfo.id !== user.id) {
        dispatch({ type: USER_UPDATE_PROFILE_RESET })
        dispatch(getUserDetails('profile'))
      } else {
        setUserName(user.user_name)
        setEmail(user.email)
        setBio(user.bio)
        setImage(user.image)
      }
    }
  }, [dispatch, history, userInfo, user, success])

  const submitHandler = (e) => {
    e.preventDefault()
    history.push('/profile')

    if (password !== confirmPassword) {
      setMessage('Passwords must match ')
    } else {
      dispatch(updateUserProfile({
        'id': user._id,
        'user_name': user_name,
        'email': email,
        'bio': bio,
        'image': image,
        'password': password,
      }))
    }
  }
  const uploadFileHandler = async (e) => {
    const file = e.target.files[0]
    const formData = new FormData()

    formData.append('image', file)
    formData.append('user_id', user.id) 

    setUploading(true)

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data' ,
          Authorization: `Bearer ${userInfo.token}`
        }
      }

      const { data } = await axios.post('http://127.0.0.1:8000/users/image/', formData, config)

      setImage(data)
      setUploading(false)

    } catch (error) {
      setUploading(false)
    }
  }




  return (
    <>

      {loading ?
        <Loader />
        : error
          ? <Message variant='danger'>{error}</Message>
          : (
            <div>
              {message && <Message variant='danger'>{message}</Message>}
              {error && <Message variant='danger'>{error}</Message>}

              <div className="md:grid md:grid-cols-4 md:gap-6">

                <div className="md:col-span-1">


                </div>
                <div className="mt-5 md:col-span-2 md:mt-0">

                  <form action="#" method="POST" onSubmit={submitHandler}>
                    <div className="shadow sm:overflow-hidden sm:rounded-md">
                      <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                        <div className="grid grid-cols-3 gap-6">
                          <div className="col-span-3 sm:col-span-2">
                            <div className="mt-1 flex rounded-md shadow-sm">
                              <input
                                value={user_name}
                                onChange={(e) => setUserName(e.target.value)}
                                type="text"
                                id="user_name"
                                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                placeholder="Nombre de Usuario"
                              />
                            </div>
                            <br></br>

                            <div className="mt-1 flex rounded-md shadow-sm">

                              <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                name="email"
                                id="email"
                                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                placeholder="Correo Electronico"
                              />
                            </div>

                            <br></br>

                           
                          </div>
                        </div>

                        <div>
                          <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                            Biografia
                          </label>
                          <div className="mt-1">
                            <textarea
                              type="text"

                              value={bio}
                              onChange={(e) => setBio(e.target.value)}
                              id="bio"
                              name="bio"
                              rows={3}
                              className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                              placeholder="Escribe algo de ti"
                              defaultValue={''}
                            />
                          </div>

                        </div>
                        <br></br>
                        <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                          Cambia tu Contraseña
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm">

                          <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            id="password"
                            className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            placeholder="Contraseña"
                          />
                        </div>

                        <div className="mt-1 flex rounded-md shadow-sm">

                          <input
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            type="password"
                            id="confirmPassword"
                            className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            placeholder="Confirmar Contraseña"
                          />
                        </div>



                        <Form.Group controlId='image' className='py-2'>
                          <Form.Label>Imagen</Form.Label>
                          <Form.Control
                            type='text'
                            placeholder='Imagen'
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                          >
                          </Form.Control>
                          <Form.Control
                            label='Selecciona un archivos'
                            type='file'
                            onChange={uploadFileHandler}
                          >
                          </Form.Control>
                        </Form.Group>
                      </div>
                      <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                        <button
                          type="submit"
                          className=" bg-gray-700 py-1 px-5 text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 "
                        >
                          GUARDAR
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
    </>
  )
}