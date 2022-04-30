import React from 'react'
import { useState } from 'react'
import { checkLogin } from '../functions/checkPassword'
import Axios from "axios"
function LoginForm(props, setCreateAccountStatus) {
    const[fields,setFields] = useState(false)
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const createUserHandler = ()=> {
        setCreateAccountStatus(true)
        alert("works")
    }

    const loginHandler = (e)=> {
        e.preventDefault()
        setFields(false)
        if(checkLogin(email,password)){
            Axios.post("http://localhost:3001/login", {
                email: email,
                password: password,
            }).then((response)=>{
                console.log(response)
            })
        } else {
            setFields(true)
        }
    }
    return (
        <div>
            <form className='d-f-col login-field'>
                <h2>Login</h2>
                <input type="text" alt="Enter Email Address" placeholder='Email Address'onChange={(e)=>setEmail(e.target.value)}></input>
                <input type="text" alt="Enter Password" placeholder='Password'onChange={(e)=>setPassword(e.target.value)}></input>
                
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