import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../projects.css'

function LoadMore() {
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const [count, setCount] = useState(0)

    async function fetchAPI() {
        try {
            setIsLoading(true)
            const response = await axios.get(`https://fakestoreapi.com/products?limit=5&skip=${count === 0 ? 0 : count * 20}`)
            if (response.data.length) {
                setItems((prevData) => [...prevData, ...response.data])
                setIsLoading(false)
            }
        } catch (error) {
            setError(error.message)
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchAPI()
    }, [count])

    if (isLoading) {
        return <p className="center-both md-font">Loading...</p>
    }
    if (error) {
        return <p className="center-both md-font">{error}</p>
    }

    return (
        <div className='loadmore'>

            <div className="loadmoreBody flex-v">
                <p className="title">Load More ({items.length})</p>
                <div className="loadmorContainer">
                    <div className="items flex-v">
                        {items && items.length ?
                            items.map(item => <p key={item.id}>{item.title}</p>)
                            : null}
                    </div>
                    <button className='button' onClick={() => setCount(count + 1)}>Load more...</button>
                </div>
            </div>

        </div>
    )
}

export default LoadMore
