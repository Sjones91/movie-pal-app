import React, {useState} from 'react';
import {BiSearchAlt2} from "react-icons/bi";


function Header() {
    const [menuOpen,setMenuOpen] = useState(false)
    const menuHandler = (e)=> {
        setMenuOpen(!menuOpen)
        
    }

  return (
        <section>
            <div className='header d-f-row'>
                <BiSearchAlt2 className='search-icon'/>
                <h1 className="head-title">Movie<span className='pal-span'>PAL</span></h1>
                <div className='menu-button'onClick={menuHandler}>
                    <div className={menuOpen? "menu-button-open": "menu-button-burger"} ></div>
                </div>
            </div>
            <div className='underline'/>
        </section>
  )
}

export default Header