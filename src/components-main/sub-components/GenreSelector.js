import { useEffect, useState, useContext } from "react"
import React from 'react'
import { isCompositeComponent } from "react-dom/test-utils";

function GenreSelector(props) {
    const genreURL = "https://api.themoviedb.org/3/genre/movie/list?api_key=e028871ecc49dd2b5147e84be898b04f&language=en-US"
    const [genres,setGenres] = useState ([]);
    const [selectedGenre,setSelectedGenre] = useState("")
    const [genreID,setGenreID] = useState();
    
    const getGenres= ()=> {
        fetch(genreURL)
            .then(response => response.json())
            .then(data => setGenres(data.genres))
    }
    const updateGenreID = ()=> {
      for(let i = 0; i<genres.length; i++){
          if(selectedGenre === genres[i].name) {
            props.setGenreID(genres[i].id)
          }
        }
        
      }
      updateGenreID();
    useEffect(()=> {
      getGenres()
      updateGenreID()
    },[genreID])
    
  return (
    <div>
        <select className="genre-selector" onChange={(e)=> {setSelectedGenre(e.target.value); updateGenreID()}}>
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