import React, { useContext } from 'react';
import { loginContext } from '../../App';
import UserLoginArea from '../../userLogin/UserLoginArea';
import { FaUserAstronaut } from "react-icons/fa";

function PopoutMenu(props,menuOpen) {
  const {user,setUser} = useContext(loginContext)
  const {loginStatus,setLoginStatus} = useContext(loginContext)
  const logoutHandler = ()=> {
    setLoginStatus(false)
    setUser({})
  }
  return (
    <section className={props.menuOpen?'pop-out-menu-open': "pop-out-menu-closed" }>
        {!loginStatus? <UserLoginArea/>:
        <div>
          <div className='d-f-row welcomeUser'>
            <FaUserAstronaut className='icon'/>
            <h1>Hi, {user.first_name}.</h1>
          </div>
          <div className='short-underline'></div>
          
            <ul className='pop-out-list d-f-col'>
                <li className='pop-out-item d-f-col'>Discover A Movie</li>
                <li className='pop-out-item'>Your Watch list</li>
                <li className='pop-out-item'>Watched Movies</li>
                <li className='pop-out-item'>Contact</li>
            </ul>
            <h3 onClick={()=> logoutHandler()}>Logout</h3>
        </div>
        
        
        }
        
        
    </section>
  )
}

export default PopoutMenu