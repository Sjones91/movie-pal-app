import React from 'react'
import interstella from "./images/interstella.jpg"
function MovieModal() {
  return (
    <section className='d-f-col modal-section'>
        <div className='modal-content'>
            <img src={interstella}></img>
            <h2>Interstella</h2>
            <p>Cast: Matthew Mconaghy, Anne Hatherway </p>
            <p>Release Date: 2014</p>
            <p>Description: A gravity signal is discovered on a dying earth with hopes of discovering a new future in the stars for humanity.</p>
        </div>

    </section>
  )
}

export default MovieModal