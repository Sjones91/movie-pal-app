import React, {useState,useContext,createContext, useEffect} from 'react';
import {BiSearchAlt2} from "react-icons/bi";
import PopoutMenu from './sub-components/pop-out-menu';
function Header() {
    const [menuOpen,setMenuOpen] = useState(false);
    const menuHandler = (e)=> {
        setMenuOpen(!menuOpen)
    }
    const [headerScroll,setHeaderScroll] = useState(false)
    
        useEffect(()=> {
            window.addEventListener("scroll", ()=> {
                if(window.scrollY > 0) {
                    setHeaderScroll(true)
                } else {
                    setHeaderScroll(false)
                }
        })
    })
    return (
            <section className={headerScroll&& "sticky"}>
                <div className='header d-f-row'>
                    <BiSearchAlt2 className='search-icon'/>
                    <h1 className="head-title">Movie<span className='pal-span'>PAL</span></h1>
                    <div className='menu-button' onClick={menuHandler}>
                        <div className={menuOpen? "menu-button-open": "menu-button-burger"} ></div>
                    </div>
                </div>
                <div className='underline'/>
                <PopoutMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            </section>
    )
}

export default Header