import React, {useState} from 'react';
import {BiSearchAlt2} from "react-icons/bi";

function header() {
    const [menuOpen,setMenuOpen] = useState(false)
    const menuHandler = ()=> {
        if(!menuOpen) {
            
        }
    }

  return (
        <section>
            <div className='header d-f-row'>
                <BiSearchAlt2 className='search-icon'/>
                <h1 className="head-title">Movie<span className='pal-span'>PAL</span></h1>
                <div className='menu-button'>
                    <div className='menu-button-burger'/>
                </div>
            </div>
            <div className='underline'/>
        </section>
  )
}

export default header