
import "./normalize.css"
import './App.scss';
import Header from "./components-main/header.js";
import { useState,useEffect,createContext } from 'react';
import React from 'react';
import DiscoverMovie from "./components-main/discoverMovie.js";
import { BsArrowUpCircleFill } from "react-icons/bs";

export const MovieContext = React.createContext()
export const loginContext = React.createContext()
function App() {
  //Login states for decendant use
  const [loginStatus,setLoginStatus] = useState(false)
  //set movie useState.(stored here as it needs sharing to header's and discover movie's children)
  const [movies,setMovies] = useState([]);
  //state values
  const [genreID,setGenreID] = useState()
  const [loading,setLoading] = useState(true)
  useEffect(()=>{

  },[loading])
  
  //scroll to top code.
  const[showButton,setShowButton] = useState(false)
  useEffect(()=> {
    window.addEventListener("scroll", ()=>{
      if(window.pageYOffset > 300) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    })
  },[])
  const scrollToTop= ()=> {
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  }

  return (
    <loginContext.Provider value={{loginStatus,setLoginStatus}}>
      <MovieContext.Provider value={{movies,setMovies,loading,setLoading,genreID,setGenreID}}>
        <div className='d-f-col'>      
              <section className="main-section">
                <Header className="header"/>
                <DiscoverMovie genreID={genreID} setGenreID={setGenreID}/>
              </section>
            {showButton && 
              <BsArrowUpCircleFill onClick={scrollToTop} className='to-the-top'/>
            }
            
          </div>
      </MovieContext.Provider>
      </loginContext.Provider>
  );
}

export default App;
