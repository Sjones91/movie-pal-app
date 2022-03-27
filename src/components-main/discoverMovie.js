import React from 'react'
import MovieItem from './sub-components/movie-item';
import GenreSelector from './sub-components/GenreSelector';
function DiscoverMovie() {
    return (
        <section className='d-f-col'>
            <GenreSelector/>
            <ul className='movie-list'>
                 <MovieItem/>
                 <MovieItem/>
                 <MovieItem/>
                 <MovieItem/>
                 <MovieItem/>
                 <MovieItem/>

            </ul>

        </section>
    )
}

export default DiscoverMovie;