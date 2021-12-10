import { useState, useEffect } from 'react'
import axiosRequest from '../../utils/axios'
import requests from '../../utils/requests'
import './Banner.css'

const Banner = () => {

    const [movie, setMovie] = useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await axiosRequest(requests.fetchNetlixOriginals)
            const randNum = Math.floor(Math.random() * request.data.results.length - 1)
            setMovie(request.data.results[randNum])
            return request
        }
        fetchData()
    }, [])
    
    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + '...' : string
    }
    
    return (
        <header 
            className='banner'
            style={{
                backgroundSize: 'cover',
                backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
                backgroundPosition: 'center top 10%'
            }}
        >
            <div className="banner__contents">
                <h1 className="banner__title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner__buttons">
                    <button className='banner__button'>Play</button>
                    <button className='banner__button'>My List</button>
                </div>
                <h1 className="banner__description">
                    {truncate(movie?.overview, 150)}
                </h1>
            </div>
            <div className="banner--fadeBottom" />
        </header>
    )
}

export default Banner