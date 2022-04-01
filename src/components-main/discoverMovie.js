import React from 'react'
import { useEffect, useState } from 'react';
import MovieItem from './sub-components/movie-item';
import GenreSelector from './sub-components/GenreSelector';
import getDate from './functions/getDate';
function DiscoverMovie(props, genreID) {
    const date = getDate()
    const [loading,setLoading] =useState(true)
    const [selectedGenreID,setSelectedGenreID] = useState(12)
    const [movies,setMovies] = useState([]);
    const [page,setPage] = useState(1)
    const genreQuery = `https://api.themoviedb.org/3/discover/movie?api_key=e028871ecc49dd2b5147e84be898b04f&language=en-US&sort_by=revenue.desc&include_adult=false&include_video=false&page=${page}&release_date.lte=${date}&with_genres=${selectedGenreID}&with_watch_monetization_types=flatrate`;
    
    const fetchMovies= ()=> {
        if(selectedGenreID === props.genreID){
            fetch(genreQuery)
                .then(response => response.json())
                .then(data => {setMovies([...movies, ...data.results]); setLoading(false)})
                .catch(error => console.log(error))
        }
        if (selectedGenreID !== props.genreID) {
            setSelectedGenreID(props.genreID)
            setPage(1)
            setMovies([])
            fetch(genreQuery)
                .then(response => response.json())
                .then(data => {setMovies(data.results); setLoading(false)})
                .catch(error => console.log(error))
        }
    }
        console.log(page,movies)
    
    useEffect(()=>{
        fetchMovies()
        console.log(page,movies)
    
    },[props.genreID, selectedGenreID,page])

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
            <button className ="loadMore"onClick={()=> setPage(page +1)}>Load More</button>
        </section>
    )
}

export default DiscoverMovie;