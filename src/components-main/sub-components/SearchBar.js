import React, { useEffect } from 'react'
import { useState, useContext } from 'react';
import {BiSearchAlt2} from "react-icons/bi";
import {IoMdClose} from "react-icons/io";
import { MovieContext } from "../../App.js"


function SearchBar() {
    const [rawSearchQuery,setRawSearchQuery] = useState();
    const [isActive,setIsActive] = useState(false)
    const {movies,setMovies,loading,setLoading,setPageRoute} = useContext(MovieContext) //movies 
    const openSearch = ()=> {
        setIsActive(true)
    }
    const searchHandler = (e)=> {
        setRawSearchQuery(e.target.value)
        console.log()
    }

    const fetchSearch = ()=>{
        setMovies([])
        setPageRoute("discoverMovie")
        const searchQuery = rawSearchQuery.replace(" ", "%");
        const url = `https://api.themoviedb.org/3/search/movie?api_key=e028871ecc49dd2b5147e84be898b04f&language=en-US&query=${searchQuery}&page=1&include_adult=false`
        fetch(url)
            
            .then(response => response.json())
            .then(data => {setMovies(data.results); setLoading(false)})
            .catch(Error => console.log(Error));

        console.log(movies)
    }
    useEffect(()=>{

    },[movies,])
    
    return (
    <div className={!isActive?'d-f-row search-section':'d-f-row search-section-open'}>
        <BiSearchAlt2 className='search-icon' onClick={openSearch}/>
        <form className='search-form' onSubmit={(e)=> {e.preventDefault(); fetchSearch()}}>
        <input type="text" placeholder='Search here...' className='search-input'
        onChange={(e)=> searchHandler(e)
        }
        ></input>
        <button type="submit" className='hidden-submit' ></button>
        </form>
        <IoMdClose className="search-close-icon" onClick={()=> setIsActive(false)}/>
    </div>
  )
}

export default SearchBar