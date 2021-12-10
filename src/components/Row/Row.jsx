import { useState, useEffect } from 'react'
import axiosRequest from '../../utils/axios'
import './Row.css'

const Row = ({ title, fetchUrl, isLargeRow = false }) => {

    const [movies, setMovies] = useState([])
    const movies_base_url = 'https://image.tmdb.org/t/p/original'

    useEffect(() => {
        async function fetchData() {
            const request = await axiosRequest.get(fetchUrl)
            setMovies(request.data.results)
            return request
        }
        fetchData()
    }, [fetchUrl])
    
    return (
        <div className="row">
            <h2 className='row__title'>{title}</h2>
            <div className="row__posters">
                {movies.map(movie => (
                    <img 
                        key={movie?.id}
                        src={`${movies_base_url}${isLargeRow ? movie?.poster_path : movie?.backdrop_path}`} 
                        alt={movie?.title} 
                        className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
                    />
                ))}
            </div>
        </div>
    )
}

export default Row