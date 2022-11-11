import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa';
import { BsSearch } from "react-icons/bs";
 // useHistory is going to allow us to do is have access to the history inside of our components.

function Search() {

    const [keysearch, setKeysearch] = useState('')


    let history = useHistory()

    const submitHandler = (e) => {
        e.preventDefault()
        if (keysearch) {
            history.push(`/?keysearch=${keysearch}`)
        } else {
            history.push(history.push(history.location.pathname))
        }
    }

    return (

        <Form
            onSubmit={submitHandler} className='d-flex'
        >
           
                    <div className=''>
                        <input
                        onChange={(e) => setKeysearch(e.target.value)}
                        name="q"
                        type="text"
                        className="w-full px-10 py-2 font-bold text-white bg-gray-800 rounded-full hover:bg-gray-900 focus:outline-none focus:shadow-outline"  
                        placeholder="Type here"
                
                />
                        </div>
                        <button
                type='submit'
                className='text-white bg-gray-800 rounded-full hover:bg-gray-900 px-3 py-2  text-sm font-medium ml-2'
            ><BsSearch size={20}/>
            </button>
                        <div>
           
            </div>
        </Form>
    )
}

export default Search