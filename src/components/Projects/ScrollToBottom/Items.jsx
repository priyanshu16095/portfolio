import React, { useState, useEffect } from 'react'
import '../projects.css'
import axios from 'axios'

function Items() {
    const URL = 'https://dummyjson.com/products?limit=100'

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [data, setData] = useState([])

    async function fetchAPI() {
        try {
            setLoading(false)
            const response = await axios.get(URL)
            if (response) {
                setData(response.data.products.map(item => item.title))
                setLoading(false)
            }
        } catch (error) {
            setError(error.message)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchAPI()
    }, [])

    if (loading) {
        return <p className="center-both md-font">Loading...</p>
    }
    if (error) {
        return <p className="center-both md-font">{error}</p>
    }

    return (
        <div className='stbitems flex-v'>
            {data && data.length ?
                data.map((item, index) => (
                    <p key={index} className='item' >{item}</p>
                ))
                : <p className='center-both md-font'>Loading...</p>}
        </div>
    )
}

export default Items
