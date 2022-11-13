import React, {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom'


import Rating from '../utils/Rating'
import Message from '../utils/Message'
import Loader from '../utils/Loader'
import LastCursoCarousel from './LastCursoCarousel';
import { listCursos } from "../../actions/cursoActions";
import Footer from '../navigation/Footer';

  
function Home(history) {

  const dispatch = useDispatch();

  const cursoList = useSelector((state) => state.cursoList);
  const { error, loading, cursos } = cursoList;



  let keysearch = history.location.search
  console.log(keysearch)
  useEffect(() => {
    dispatch(listCursos(keysearch));
  }, [dispatch, keysearch]);


return (
  <>
    {!keysearch && <LastCursoCarousel />}
    {loading ? <Loader />
        : error ? <Message>{error}</Message>
          :
      <div className="bg-white">
        <h1 className=" font-bold tracking-tight  mt-9 text-gray-900 sm:text-3xl ">
              <span className="block xl:inline">CURSOS DE </span>{' '}
              <span className="block text-indigo-600 xl:inline">BACKEND</span>
            </h1>

            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
        <div className="mx-auto max-w-2xl py-10  sm:px-2 lg:max-w-7xl lg:px-4">
        
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {cursos.map((curso) => (
              <>
    
              <div key={curso.id} className="group relative">
                 <Link to={`/curso/${curso.id}`}>
                 <h3 className="text-sm text-gray-700">
                      <a href={curso.id}>
                        <span aria-hidden="true" className="absolute inset-0" 
                        style={{textDecoration: 'none'}}/>
                        {curso.title}
                      </a>
                      
                    </h3>
                <div className=" aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none ">
                  <img
                    src={`http://127.0.0.1:8000${curso.image}`}

                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                </Link>

                <div className="mt-4 flex justify-between">
                  <div>
                    
                    <p className="mt-1 text-sm text-gray-500"> <Rating value={curso.rating} color={'#ffa900'} />
                        <p>{`${curso.num_reviews} reviews`}</p></p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{curso.price} ETH</p>   
                     
                </div>
              </div>
              </>
            ))}
          </div>

          <h1 className=" font-bold tracking-tight  mt-9 text-gray-900 sm:text-3xl ">
              <span className="block xl:inline">CURSOS DE  </span>{' '}
              <span className="block text-indigo-600 xl:inline">FRONTEND</span>
          </h1>
                <div>
                  <h1>mudsfusdbf</h1>
                </div>
        <div className='mb-10'>
          <h1 className=" font-bold tracking-tight  mt-9 text-gray-900 sm:text-3xl ">
              <span className="block xl:inline">CURSOS DE  </span>{' '}
              <span className="block text-indigo-600 xl:inline">HACKING</span>
          </h1>

          <div>
                  <h1>mudsfusdbf</h1>
          </div>
          </div>

          <div className='mb-10'>
          <h1 className=" font-bold tracking-tight  mt-9 text-gray-900 sm:text-3xl ">
              <span className="block xl:inline">CURSOS DE  </span>{' '}
              <span className="block text-indigo-600 xl:inline">MACHINE LEARNING</span>
          </h1>

          <div>
                  <h1>mudsfusdbf</h1>
          </div>
          </div>

          <div className='mb-10'>
          <h1 className=" font-bold tracking-tight  mt-9 text-gray-900 sm:text-3xl ">
              <span className="block xl:inline">CURSOS DE  </span>{' '}
              <span className="block text-indigo-600 xl:inline">PROGRAMACION</span>{' '}
          </h1>

          <div>
                  <h1>mudsfusdbf</h1>
          </div>
          </div>

          <div className='mb-10'>
          <h1 className=" font-bold tracking-tight  mt-9 text-gray-900 sm:text-3xl ">
              <span className="block xl:inline">PROYECTOS</span>{' '}
              <span className="block text-indigo-600 xl:inline">COMPLETOS</span>{' '}
          </h1>

          <div>
                  <h1>mudsfusdbf</h1>
          </div>
          </div>



        </div>

      </div>
      
      }
  

      </>
    )
  }

export default Home;