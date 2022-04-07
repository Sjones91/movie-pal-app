import React from 'react'
import { useEffect, useState,createContext, useContext } from 'react';
import MovieItem from './sub-components/movie-item';
import GenreSelector from './sub-components/GenreSelector';
import getDate from '../functions/getDate';
import MovieContent from './MovieContent';
import { MovieContext } from '../App';
export const PageContext = React.createContext();
function DiscoverMovie(props, genreID) {
    const date = getDate()
    const [loading,setLoading] =useState(true)
    const [selectedGenreID,setSelectedGenreID] = useState(12)
    const [page,setPage] = useState(1)
    const {movies,setMovies} = useContext(MovieContext)
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
    
    useEffect(()=>{
        fetchMovies()
    
    },[props.genreID, selectedGenreID,page])

    return (
        <PageContext.Provider value={{movies, page, setPage}}>
            <section className='d-f-col'>
                <GenreSelector genreID={props.genreID} setGenreID={props.setGenreID}/>
                {loading? <h1 className='d-f-r loading'>Loading...</h1>: <MovieContent/>}
            </section>
        </PageContext.Provider>
    )
}

export default DiscoverMovie;