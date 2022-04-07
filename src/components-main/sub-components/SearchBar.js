import React from 'react'
import { useState, useContext } from 'react';
import {BiSearchAlt2} from "react-icons/bi";
import {IoMdClose} from "react-icons/io";
import { MovieContext } from "../../App.js"


function SearchBar() {
    const [searchQuery,setSearchQuery] = useState();
    const [isActive,setIsActive] = useState(false)
    const {movies,setMovies} = useContext(MovieContext)
    const openSearch = ()=> {
        setIsActive(true)
    }
    const searchHandler = (e)=> {
        setSearchQuery(e.target.value)
        console.log(searchQuery)
    }
    // const fetchMovies =() {}
    return (
    <div className={!isActive?'d-f-row search-section':'d-f-row search-section-open'}>
        <BiSearchAlt2 className='search-icon' onClick={openSearch}/>
        <input type="text" placeholder='Search here...' className='search-input'
        onChange={(e)=> searchHandler(e)
        }
        ></input>
        <IoMdClose className="search-close-icon" onClick={()=> setIsActive(false)}/>
    </div>
  )
}

export default SearchBar