
import "./normalize.css"
import './App.scss';
import Header from "./components-main/header.js";
import { useState,useEffect,createContext } from 'react';
import React from 'react';
import DiscoverMovie from "./components-main/discoverMovie.js";
import { BsArrowUpCircleFill } from "react-icons/bs";

export const MovieContext = React.createContext()
function App() {
  //set movie useState.(stored here as it needs sharing to header's and discover movie's children)
  const [movies,setMovies] = useState([]);
  //state values
  const [genreID,setGenreID] = useState("teststart")
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
    <MovieContext.Provider value={{movies,setMovies}}>
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
  );
}

export default App;
