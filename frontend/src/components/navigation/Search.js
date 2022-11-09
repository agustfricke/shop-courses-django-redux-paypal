import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa';
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
           
                    <div>
                        <input
                        onChange={(e) => setKeysearch(e.target.value)}
                        name="q"
                        type="text"
                        className="form-control mr-4  flex-auto   px-5 py-1  font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"  
                        placeholder="Type here"
                        />
                        </div>
                        <div>
            <button
                type='submit'
                className='bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium ml-2'
            >
                SEARCH
            </button>
            </div>
        </Form>
    )
}

export default Search