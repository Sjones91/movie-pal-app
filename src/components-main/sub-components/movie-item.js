import React from 'react'
import interstella from "../images/interstella.jpg"
import defaultMovie from "../images/defaultMovie.jpg"
function MovieItem(props) {
    const {title, poster_path, release_date} = props
    return (
    <li className='d-f-col movie-item'>
        <img src={poster_path != null? `https://image.tmdb.org/t/p/w500${poster_path}` : defaultMovie}></img>
        <div className='d-f-row movie-details'>
            <div className='d-f-col'>
                <h2>{title}</h2>
                <h2>Release Date:</h2>
                <h2>{release_date}</h2>
            </div>
            
        </div>
    </li>
    )
}

export default MovieItem