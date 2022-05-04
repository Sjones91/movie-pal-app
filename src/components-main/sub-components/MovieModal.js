import React from 'react'
import { useContext } from 'react';
import {IoMdClose} from "react-icons/io";
import { ModalContext } from '../MovieContent';
import { loginContext } from '../../App';
import Axios from 'axios';
function MovieModal(props) {
  const {modalContent,SetModalContent,setModalSelected} = useContext(ModalContext)
  const {title,release_date,overview,poster_path,vote_average,id} = modalContent;
  const {user} = useContext(loginContext)
  
  const addMovie = () => {
    Axios.post("http://localhost:3001/addMovie", {
                userId :user.ID,
                userName : user.first_name,
                movieID : id,
                movieTitle: title
            }).then((response)=>{
                console.log(response)
            })
    console.log(id)
  }
  
  
  
  return (
    <section className='d-f-col modal-section'>
        <IoMdClose className='close-icon' onClick={()=> {setModalSelected(false);SetModalContent({})}}/>
        <div className='modal-content'>
            <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={`${title} Movie image`}></img>
            <h1>{title}</h1>
            {vote_average !== "null"&&<h2>Rating</h2>}
            {vote_average !== "null"&&<p>{vote_average}</p>}
            <h2>Release Date: </h2>
            <p>{release_date}</p>
            <h2>Description:</h2>
            <p>{overview}</p>
            <button className='login-btn j-self-center' onClick={()=> addMovie()}>Add to watch list</button>
        </div>

    </section>
  )
}

export default MovieModal