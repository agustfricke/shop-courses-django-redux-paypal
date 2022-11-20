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




  <form className="w-full" onSubmit={submitHandler}>
    <label htmlFor="search" className="sr-only">
      Search
    </label>
    <div className="relative">
      <button
      type="submit"
      className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
        <BsSearch className="h-5 w-5 text-gray-400" aria-hidden="true" />
      </button>
      <input
      onChange={(e) => setKeysearch(e.target.value)}
        id="search"
        name="search"
        className="block w-full font-gilroy-light bg-white dark:bg-dark-bg border dark:border-dark-bg border-gray-300 rounded-full py-2 pl-12 pr-12 text-sm placeholder-gray-700 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-gray-500 focus:border-gray-500 "
        placeholder="Buscar"
      />
    </div>
  </form>
    )
}

export default Search