import React from 'react'
import { useState,useContext } from 'react'
import { checkLogin } from '../functions/checkPassword'
import Axios from "axios"
import { loginContext } from '../App'
function LoginForm(props, setCreateAccountStatus) {
    const[fields,setFields] = useState(false)
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const {setUser,setLoginStatus} = useContext(loginContext)


    const loginHandler = (e)=> {
        e.preventDefault()
        setFields(false)
        if(checkLogin(email,password)){
            Axios.post("http://localhost:3001/login", {
                email: email,
                password: password,
            }).then((response)=>{
                setUser(response.data[0])
                setLoginStatus(true)
                console.log(response.data[0])
            })
        } else {
            setFields(true)
        }
    }
    return (
        <div>
            <form className='d-f-col login-field'>
                <h2>Login</h2>
                <input type="email" alt="Enter Email Address" placeholder='Email Address'onChange={(e)=>setEmail(e.target.value)}></input>
                <input type="password" alt="Enter Password" placeholder='Password'onChange={(e)=>setPassword(e.target.value)}></input>
                
                {fields && <h3 className='form-warning'>Please check all fields are filled and passwords match.</h3>}
                <button type="submit" className = "login-btn"alt="Login Button" onClick={(e)=> loginHandler(e)}>Login</button>
            <h3>Forgotten Password?</h3>
            </form>
            <div className='short-underline'></div>
            <h3 className='create-account' onClick={()=> props.setCreateAccountStatus(true)}>Create an account.</h3>
        </div>
    )
}

export default LoginForm