import { useEffect, useState, useContext } from "react"
import React from 'react';
import { isCompositeComponent } from "react-dom/test-utils";
import { PageContext } from "../discoverMovie";
import { MovieContext } from "../../App";
import getDate from "../../functions/getDate";

function GenreSelector(props) {
    const genreURL = "https://api.themoviedb.org/3/genre/movie/list?api_key=e028871ecc49dd2b5147e84be898b04f&language=en-US"
    const [genres,setGenres] = useState ([]);
    const [selectedGenre,setSelectedGenre] = useState("")
    const [selectedGenreID,setSelectedGenreID] = useState(12)
    const {page, movies,setMovies, setPage} = useContext(PageContext)
    const {setLoading,genreID,setGenreID} = useContext(MovieContext)
    const getGenres= ()=> {
        fetch(genreURL)
            .then(response => response.json())
            .then(data => setGenres(data.genres))
    }
    const updateGenreID = ()=> {
      for(let i = 0; i < genres.length; i++){
          if(selectedGenre === genres[i].name) {
            setGenreID(genres[i].id) 
          }
        }   
    }
      const date = getDate()
      
      const genreQuery = `https://api.themoviedb.org/3/discover/movie?api_key=e028871ecc49dd2b5147e84be898b04f&language=en-US&sort_by=revenue.desc&include_adult=false&include_video=false&page=${page}&release_date.lte=${date}&with_genres=${genreID}&with_watch_monetization_types=flatrate`;
      
      const fetchMovies= ()=> {
        setPage(1)
        setMovies([])
        console.log("genrefetch")
        fetch(genreQuery)
                .then(response => response.json())
                .then(data => {setMovies(data.results); setLoading(false);setPage(page + 1)})
                .catch(error => console.log(error))
        }
        
    useEffect(()=>{

    },[movies])
    useEffect(()=> {
      getGenres()
      updateGenreID()
      fetchMovies()
    },[genreID,selectedGenre])
    
  return (
    <div>
        <select className="genre-selector" onChange={(e)=> {setSelectedGenre(e.target.value);}}>
            {genres.map((genre)=> {
              return(
                <option className="genre-item" key={genre.id} value={genre.name}>
                  {genre.name}
                </option>
              )
            })}
        </select>
    </div>
  )
}

export default GenreSelector