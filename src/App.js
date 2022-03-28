import logo from './logo.svg';
import "./normalize.css"
import './App.scss';
import Header from "./components-main/header.js";
import PopoutMenu from './components-main/sub-components/pop-out-menu';
import { useState,createContext,useContext } from 'react';
import React from 'react';
import DiscoverMovie from "./components-main/discoverMovie.js"

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  const [genreID,setGenreID] = useState("teststart")
  return (
    <div className='d-f-col'>      
          <section className="main-section">
            <Header className="header" menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <PopoutMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <DiscoverMovie genreID={genreID} setGenreID={setGenreID}/>
          </section>
      </div>
  );
}

export default App;
