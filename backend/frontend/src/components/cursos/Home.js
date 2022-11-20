import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Rating from '../utils/Rating';
import Error from '../utils/Error';
import Loader from '../utils/Loader';
import LastCursoCarousel from './LastCursoCarousel';
import { listCursos } from "../../actions/cursoActions";


function Home(history) {

  useEffect(() => {
    document.title = 'Tech con Agust | Home'
  }, []);

  const dispatch = useDispatch();

  const cursoList = useSelector((state) => state.cursoList);
  const { error, loading, cursos } = cursoList;

  let keysearch = history.location.search;
  console.log(keysearch);
  useEffect(() => {
    dispatch(listCursos(keysearch));
  }, [dispatch, keysearch]);


  return (
    <>
      {!keysearch && <LastCursoCarousel />}
      {error && <Error>{error}</Error>}
      {loading ?
        <Loader />
        : (
          <>

            <br></br> <br></br>
            <br></br> <br></br>
            <br></br> <br></br>
            <br></br> <br></br>

            <div className=" mt-10">
              <div className="mx-auto max-w-7xl  sm:px-6 ">
                <div className="mx-auto max-w-2xl  sm:py-24 lg:max-w-none ">
                  <h3 className="text-4xl font-bold tracking-tight sm:text-center sm:text-5xl mb-8">
                    <span className="block xl:inline text-gray-800"> Nuestros </span>{' '}
                    <span className="block xl:inline text-indigo-800">cursos</span>{' '}
                  </h3>
                  <br></br>
                  <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                    {cursos && cursos.map((c) => (
                      <div className='bg-gray-900 shadow-2xl'>
                        <div className='m-8'>
                          <div key={c.id} className="group relative">
                            <a href={`/curso/${c.id}`}>

                              <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                                <img
                                  src={`http://127.0.0.1:8000${c.image}`}
                                  alt={c.imageAlt}
                                  className="h-full w-full object-cover object-center"
                                />
                              </div>
                              <h3 className='font-semibold mt-6 text-gray-200'>{c.title}</h3>
                              <p className="text-base font-semibold text-gray-200">{c.description}</p>
                            </a>
                            <div className="mt-4 flex justify-between">
                              <div>

                                <p className="mt-1 text-sm text-gray-100"> <Rating value={c.rating} color={'#ffa900'} />
                                  <p>{`${c.num_reviews} reviews`}</p></p>
                              </div>
                              <p className="text-sm font-medium text-gray-100">{c.price} ETH</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
    </>
  )
}

export default Home;