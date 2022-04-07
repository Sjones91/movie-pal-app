import React from 'react'
import { useContext,useState } from 'react'
import MovieItem from './movie-item'
import { PageContext } from '../discoverMovie'
import { MovieContext } from '../../App'
function MovieList() {
    const {page,setPage} = useContext(PageContext)
    const {movies,setMovies}= useContext(MovieContext)
  return (
    <section className='d-f-col'>
      <ul className='movie-list'>
                  {movies.map((movie)=>{
                      const {id,poster_path,title,release_date,overview,vote_average} = movie
                      return (
                          <MovieItem 
                          key={id} 
                          poster_path={poster_path} 
                          title={title} 
                          release_date={release_date}
                          overview={overview}
                          vote_average={vote_average}
                          />
                      )
                  })}
      </ul>
      <button className ="loadMore"onClick={()=> setPage(page +1)}>Load More</button>
      </section>            
  )
}

export default MovieList