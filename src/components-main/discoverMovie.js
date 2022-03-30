import React from 'react'
import { useEffect, useState } from 'react';
import MovieItem from './sub-components/movie-item';
import GenreSelector from './sub-components/GenreSelector';
import getDate from './functions/getDate';
function DiscoverMovie(props, genreID, setGenreID) {
    
    const date = getDate()
    const [loading,setLoading] =useState(true)
    const [selectedGenreID,setSelectedGenreID] = useState(12)
    const genreQuery = `https://api.themoviedb.org/3/discover/movie?api_key=e028871ecc49dd2b5147e84be898b04f&language=en-US&sort_by=revenue.desc&include_adult=false&include_video=false&page=1&release_date.lte=${date}&with_genres=${selectedGenreID}&with_watch_monetization_types=flatrate`;
    const [movies,setMovies] = useState([])

    const fetchMovies= ()=> {
        setSelectedGenreID(props.genreID)
        fetch(genreQuery)
            .then(response => response.json())
            .then(data => {setMovies(data.results); setLoading(false)})
            .catch(error => console.log(error))
    }

    useEffect(()=>{
        fetchMovies()
    },[props.genreID, selectedGenreID])

    return (
        <section className='d-f-col'>
            <GenreSelector genreID={props.genreID} setGenreID={props.setGenreID}/>
            {loading? 
            <h1 className='d-f-r loading'>Loading...</h1>:
            <ul className='movie-list'>
                {movies.map((movie)=>{
                    const {id,poster_path,title,release_date} = movie
                    return (
                        <MovieItem key={id} poster_path={poster_path} title={title} release_date={release_date}/>
                    )
                })}
            </ul>

            }
            
        </section>
    )
}

export default DiscoverMovie;