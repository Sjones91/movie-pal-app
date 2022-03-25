import React, {useState,useContext,createContext} from 'react';
import {BiSearchAlt2} from "react-icons/bi";

function Header(props,menuOpen, setMenuOpen) {
    // const [menuOpen,setMenuOpen] = useState(false)
    const menuHandler = (e)=> {
        props.setMenuOpen(!props.menuOpen)
        console.log(props.menuOpen)
    }
    
    return (
            <section>
                <div className='header d-f-row'>
                    <BiSearchAlt2 className='search-icon'/>
                    <h1 className="head-title">Movie<span className='pal-span'>PAL</span></h1>
                    <div className='menu-button' onClick={menuHandler}>
                        <div className={props.menuOpen? "menu-button-open": "menu-button-burger"} ></div>
                    </div>
                </div>
                <div className='underline'/>
            </section>
    )
}

export default Header