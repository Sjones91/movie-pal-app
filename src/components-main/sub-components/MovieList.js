import React, { useEffect } from 'react'
import { useContext,useState } from 'react'
import MovieItem from './movie-item'
import { PageContext } from '../discoverMovie'
import { MovieContext } from '../../App'
import buildDate from '../../functions/getDate'
function MovieList() {
    const {page,setPage} = useContext(PageContext)
    const {movies,setMovies,genreID,}= useContext(MovieContext)
    const date = buildDate()

    const url = `https://api.themoviedb.org/3/discover/movie?api_key=e028871ecc49dd2b5147e84be898b04f&language=en-US&sort_by=revenue.desc&include_adult=false&include_video=false&page=${page}&release_date.lte=${date}&with_genres=${genreID}&with_watch_monetization_types=flatrate`
    const fetchMore = ()=> {

      fetch(url)
        .then(response => response.json())
        .then(data => setMovies([...movies, ...data.results]))
    }
    useEffect(()=> {
    },[])
  return (
    <section className='d-f-col'>
      <ul className='movie-list'>
                  {movies.map((movie)=>{
                      const {id,poster_path,title,release_date,overview,vote_average} = movie
                      return (
                          <MovieItem 
                          id={id} 
                          poster_path={poster_path} 
                          title={title} 
                          release_date={release_date}
                          overview={overview}
                          vote_average={vote_average}
                          />
                      )
                  })}
      </ul>
      <button className ="loadMore"onClick={()=> {setPage(page + 1); fetchMore()}}>Load More</button>
      </section>            
  )
}

export default MovieList