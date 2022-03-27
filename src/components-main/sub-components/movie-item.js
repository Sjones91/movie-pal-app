import React from 'react'
import interstella from "../images/interstella.jpg"
function MovieItem() {
    return (
    <li className='d-f-col movie-item'>
        <img src={interstella}></img>
        <div className='d-f-row movie-details'>
            <div className='d-f-col'>
                <h2>Interstellar</h2>
                <h2>Sci-fi</h2>
                <h2>Year: 2014</h2>
            </div>
            <div className='d-f-col rating-div'>
                <h3 className='rating'>7.2</h3>
                <h3 className='rating'>/10</h3>
            </div>
        </div>
    </li>
    )
}

export default MovieItem