import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../projects.css'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CircleIcon from '@mui/icons-material/Circle';

function Slider() {
    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const [selectedImageIndex, setSelectedImageIndex] = useState(0)

    async function fetchAPI() {
        try {
            setIsLoading(true)
            const response = await axios.get('https://picsum.photos/v2/list?limit=10')
            if (response) {
                setImages(response.data)
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

    function handleNext() {
        if (selectedImageIndex === images.length - 1) {
            setSelectedImageIndex(0)
            return
        }
        setSelectedImageIndex(selectedImageIndex + 1)
    }
    function handlePrevious() {
        if (selectedImageIndex === 0) {
            setSelectedImageIndex(images.length - 1)
            return
        }
        setSelectedImageIndex(selectedImageIndex - 1)
    }
    return (
        <div className='slider flex-v'>
            <div className="sliderComp flex-h">
                <button className='round button' onClick={handlePrevious}><NavigateBeforeIcon /></button>
                <div className="image">
                    {images && images.length > 0 ?
                        images.map((image, index) => <img src={image.download_url} className={selectedImageIndex === index ? 'activeImage' : 'inactiveImage'} />)
                        : null}
                </div>
                <button className='round button' onClick={handleNext}><NavigateNextIcon /></button>
            </div>

            <div className="buttons flex">
                {images && images.length ?
                    images.map((_, index) => <button className='button currentImageCircle' onClick={() => setSelectedImageIndex(index)}>{selectedImageIndex === index ? <CircleOutlinedIcon /> : <CircleIcon />}</button>)
                    : null}
            </div>

        </div>
    )
}

export default Slider
