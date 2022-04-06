import React from 'react'
import { useState,useContext } from 'react';
import interstella from "../../images/interstella.jpg"
import {IoMdClose} from "react-icons/io";
import { ModalContext } from '../MovieContent';
function MovieModal(props) {
  const {modalContent,SetModalContent,setModalSelected} = useContext(ModalContext)
  const {title,release_date,overview,poster_path,vote_average} = modalContent;
  
  return (
    <section className='d-f-col modal-section'>
        <IoMdClose className='close-icon' onClick={()=> {setModalSelected(false);SetModalContent({})}}/>
        <div className='modal-content'>
            <img src={`https://image.tmdb.org/t/p/w500${poster_path}`}></img>
            <h1>{title}</h1>
            {vote_average != "null"&&<h2>Rating</h2>}
            {vote_average != "null"&&<p>{vote_average}</p>}
            <h2>Release Date: </h2>
            <p>{release_date}</p>
            <h2>Description:</h2>
            <p>{overview}</p>
        </div>

    </section>
  )
}

export default MovieModal