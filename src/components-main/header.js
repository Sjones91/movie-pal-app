import React, {useState, useEffect, useContext} from 'react';
import { MovieContext } from '../App';
import PopoutMenu from './sub-components/pop-out-menu';
import SearchBar from './sub-components/SearchBar';
function Header() {
    const [menuOpen,setMenuOpen] = useState(false);
    const {pageRoute,setPageRoute} = useContext(MovieContext)
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
                    <SearchBar/>
                    <h1 className="head-title" onClick={()=> setPageRoute("discoverMovie")}>Movie<span className='pal-span'>PAL</span></h1>
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