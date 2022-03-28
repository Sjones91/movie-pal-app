import React from 'react'
import { useEffect, useState } from 'react';
import MovieItem from './sub-components/movie-item';
import GenreSelector from './sub-components/GenreSelector';
function DiscoverMovie(props, genreID, setGenreID) {
    const [selectedGenreID,setSelectedGenreID] = useState(12)
    const genreQuery = `https://api.themoviedb.org/3/discover/movie?api_key=e028871ecc49dd2b5147e84be898b04f&language=en-US&sort_by=release_date.desc&include_adult=false&include_video=false&page=1&with_genres=${selectedGenreID}&with_watch_monetization_types=flatrate`;
    const [movies,setMovies] = useState([]);
    // const date = New date(getCurrentYear)
    const fetchMovies= ()=> {
        setSelectedGenreID(props.genreID)
        fetch(genreQuery)
            .then(response => response.json())
            .then(data => setMovies(data.results))
            .catch(error => console.log(error))
    }

    useEffect(()=>{
        fetchMovies()
        console.log(movies)
    },[props.genreID])

    return (
        <section className='d-f-col'>
            <GenreSelector genreID={props.genreID} setGenreID={props.setGenreID}/>
            <ul className='movie-list'>
                {movies.map((movie)=>{
                    const {id,poster_path,title,release_date} = movie
                    console.log(poster_path)
                    return (
                        <MovieItem key={id} poster_path={poster_path} title={title} release_date={release_date}/>
                    )
                })}

            </ul>

        </section>
    )
}

export default DiscoverMovie;