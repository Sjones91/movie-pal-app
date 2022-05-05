import React from 'react'
import { useEffect, useState,useContext } from 'react';
import GenreSelector from './sub-components/GenreSelector';
import getDate from '../functions/getDate';
import MovieContent from './MovieContent';
import { MovieContext } from '../App';
import WatchList from './movieContent/WatchList';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

export const PageContext = React.createContext();

function DiscoverMovie(props, genreID) {
    const date = getDate()

    const [page,setPage] = useState(1)
    const {movies,setMovies,loading,pageRoute,setPageRoute} = useContext(MovieContext)
    
    
    useEffect(()=>{
        
    
    },[])

    return (
            <PageContext.Provider value={{movies,setMovies, page, setPage, date}}>
                {pageRoute=="discoverMovie"&&
                    <section className='d-f-col'>
                    <GenreSelector genreID={props.genreID} setGenreID={props.setGenreID}/>
                    {loading? <h1 className='d-f-r loading'>Loading...</h1>: <MovieContent/>}
                    </section>
                }
                {pageRoute=="watchList"&&
                    <WatchList/>
                }
                
                        
            </PageContext.Provider>
        
    )
}

export default DiscoverMovie;