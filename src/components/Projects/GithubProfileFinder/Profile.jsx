import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../projects.css'

function Profile() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [username, setUsername] = useState('priyanshu16095')
  const [data, setData] = useState()
  const URL = `https://api.github.com/users/${username}`

  async function fetchAPI() {
    try {
      setIsLoading(true)
      const response = await axios.get(URL)
      if (response && response.data) {
        console.log(response.data)
        setData(response.data)
        setUsername('')
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

  function handleSubmit() {
    fetchAPI()
  }

  return (
    <div className='profile flex-v'>

      <div className="inputBox flex-h">
        <input value={username} type="text" placeholder='Search...' onChange={e => setUsername(e.target.value)} />
        <button className='button' onClick={username !== '' ? handleSubmit : null}>Search</button>
      </div>

      {data && (
        <div className="profileDetails lightpContainer flex">
          <img src={data.avatar_url} />
          <div className="profileDetailsHeader">
            <p className="link" ><a href={`https://github.com/${username}`}>{data.login}</a></p>
            <div className="profileDetailsText flex-v">
              <p className="md-font">{data.name}</p>
              <p><span className='key'>Repositories:</span> {data.public_repos}</p>
              <p><span className='key'>Created At:</span> {data.created_at}</p>
              <p><span className='key'>Last Updated At:</span> {data.updated_at}</p>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

export default Profile
