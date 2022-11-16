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

          <>
    
<br></br> <br></br>
          <div className="mt-10">
          <div className="mx-auto max-w-7xl  sm:px-6 ">
            <div className="mx-auto max-w-2xl  sm:py-24 lg:max-w-none ">
            <h1 className="">

            <span className="block xl:inline text-gray-800">TODOS LOS  </span>{' '}


          <span className="block xl:inline text-indigo-800">CURSOS</span>{' '}
            </h1>

    
              <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                {cursos.map((c) => (
                  
                  <div key={c.name} className="group relative">
                    <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                      <img
                        src={`http://127.0.0.1:8000${c.image}`}
                        alt={c.imageAlt}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <h3 className="mt-6 text-sm text-gray-500">
                      <a href={`/curso/${c.id}`}>
                        <span className="absolute inset-0" />
                        {c.title}
                      </a>
                    </h3>
                    <p className="text-base font-semibold text-gray-900">{c.description}</p>


                    <div className="mt-4 flex justify-between">
                  <div>
                    
                    <p className="mt-1 text-sm text-gray-500"> <Rating value={c.rating} color={'#ffa900'} />
                        <p>{`${c.num_reviews} reviews`}</p></p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{c.price} ETH</p>   
                     
                </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>








      

        </>
      
      }
  

      </>
    )
  }

export default Home;