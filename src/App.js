import logo from './logo.svg';
import "./normalize.css"
import './App.scss';
import Header from "./components-main/header.js";
import PopoutMenu from './components-main/sub-components/pop-out-menu';
import { useState } from 'react';
import DiscoverMovie from "./components-main/discoverMovie.js"

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
      <div className='d-f-col'>
        <section className="main-section">
          <Header className="header" menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
          <PopoutMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
          <DiscoverMovie/>
        </section>
      </div>
  );
}

export default App;
