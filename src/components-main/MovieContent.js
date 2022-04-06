import React from 'react'
import MovieList from './sub-components/MovieList'
import { useContext,useState, createContext } from 'react'
import { MovieContext } from './discoverMovie'
import MovieModal from './sub-components/MovieModal'
export const ModalContext = createContext()
function MovieContent() {
    const {page,setPage} = useContext(MovieContext)
    const [modalSelected,setModalSelected]= useState(false)
    const [modalContent,setModalContent] = useState()
    return (
        <ModalContext.Provider value={{modalContent,setModalContent,setModalSelected}}>
            <section className='d-f-col'>
                {!modalSelected? <MovieList/>: <MovieModal/>}
            </section>
        </ModalContext.Provider>
    )
}

export default MovieContent