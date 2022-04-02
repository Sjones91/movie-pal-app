import logo from './logo.svg';
import "./normalize.css"
import './App.scss';
import Header from "./components-main/header.js";
import PopoutMenu from './components-main/sub-components/pop-out-menu';
import { useState,createContext,useContext, useEffect } from 'react';
import React from 'react';
import DiscoverMovie from "./components-main/discoverMovie.js";
import { BsArrowUpCircleFill } from "react-icons/bs";
import MovieModal from './components-main/MovieModal';
function App() {
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
    <div className='d-f-col'>      
          <section className="main-section">
            <Header className="header"/>
            <DiscoverMovie genreID={genreID} setGenreID={setGenreID}/>
          </section>
        {showButton && 
          <BsArrowUpCircleFill onClick={scrollToTop} className='to-the-top'/>
        }
        <MovieModal/>
      </div>
  );
}

export default App;
