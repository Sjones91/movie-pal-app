import React, { useState,useContext } from 'react'
import menuContext from '../contexts'

function PopoutMenu(props,menuOpen) {
  return (
    <section className={props.menuOpen?'pop-out-menu-open': "pop-out-menu-closed" }>
        <ul className='pop-out-list d-f-col'>
            <li className='pop-out-item d-f-col'>Discover A Movie</li>
            <li className='pop-out-item'>Your Watch list</li>
            <li className='pop-out-item'>Watched Movies</li>
            <li className='pop-out-item'>Contact</li>
        </ul>
    </section>
  )
}

export default PopoutMenu