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

    const [page,setPage] = useState(1)
    const {movies,setMovies,loading,setLoading} = useContext(MovieContext)
    
    useEffect(()=>{
        
    
    },[])

    return (
        <PageContext.Provider value={{movies,setMovies, page, setPage, date}}>
            <section className='d-f-col'>
                <GenreSelector genreID={props.genreID} setGenreID={props.setGenreID}/>
                {loading? <h1 className='d-f-r loading'>Loading...</h1>: <MovieContent/>}
            </section>
        </PageContext.Provider>
    )
}

export default DiscoverMovie;