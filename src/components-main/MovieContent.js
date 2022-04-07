import React from 'react'
import MovieList from './sub-components/MovieList'
import { useContext,useState, createContext } from 'react'
import { PageContext } from './discoverMovie'
import MovieModal from './sub-components/MovieModal'
export const ModalContext = createContext()
function MovieContent() {
    const {page,setPage} = useContext(PageContext)
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