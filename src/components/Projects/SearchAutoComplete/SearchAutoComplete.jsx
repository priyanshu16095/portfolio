import React, { useState, useEffect } from 'react'
import '../projects.css'
import axios from 'axios'
import Suggestions from './Suggestions'

function SearchAutoComplete() {
  const URL = 'https://dummyjson.com/users'
  const[isLoading, setIsLoading] = useState(false)
  const[error, setError] = useState('')
  const[searchParam, setSearchParam] = useState('')
  const[showDropDown, setShowDropDown] = useState(false)
  const[users, setUsers] = useState([])
  const[fileteredUsers, setFileteredUsers] = useState([])

  async function fetchAPI() {
    try {
      setIsLoading(true)
      const response = await axios.get(URL)
      if (response && response.data.users && response.data.users.length) {
        setUsers(response.data.users.map(user => user.firstName))
        setIsLoading(false)
      }
    } catch (error) {
      setError(error.message)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchAPI()
  }, [])
  if (isLoading) {
    return <p className="center-both">Loading...</p>
  }
  if (error) {
    return <p className="center-both">{error}</p>
  }

  function handleChange(e) {
    const query = e.target.value.toLowerCase()
    setSearchParam(query)
    if(query.length > 1) {
      const fileteredData = users && users.length ?
      users.filter(user => user.toLowerCase().indexOf(query) > -1)
      : []
      setFileteredUsers(fileteredData)
      setShowDropDown(true)
    } else {
      setShowDropDown(false)
    }
  }
  function handleClick(e) {
    setShowDropDown(false)
    setSearchParam(e.target.innerText)
    setFileteredUsers([])
  }

  return (
    <div className='search'>

        <div className="searchBody flex-v">
            <p className="title">Search Auto Complete</p>
            <div className="searchMain flex-v">
              
              <div className="inputBox flex-h">
                <input value={searchParam} type="text" placeholder='Search...' onChange={e => handleChange(e)} />
                <button className='button'>Search</button>
              </div>

              {showDropDown && <Suggestions data={fileteredUsers} handleClick={handleClick} />}
              
            </div>
        </div>
      
    </div>
  )
}

export default SearchAutoComplete
