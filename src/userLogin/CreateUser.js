import React from 'react'
import { useState } from 'react'
import Axios from "axios"
import { checkPassword, checkFields } from '../functions/checkPassword'


function CreateUser(props) {
  //new user object created to store user inputs from the form field
  const [newUser,setNewUser] = useState({
      first_name:"",
      surname:"",
      email:"",
      password:"",
      password_2:""
  })
  //usestate determines if the form input warning message is displayed via conditional rendering
  const[fields,setFields] = useState(false)

  /*handler function attacted to register button on form. Sets fields state to false to ensure warning message is hidden
  then prevents default window function of reload. the "if" statement then checks to see if all fields are filled and password
  matches. if these conditions are met, the data from the new user variable is posted to the backend for database input. 
  If conditions are not met, a warning message is displayed asking to check all fields are filled and passwords match.*/
  const registrationHandler = (e)=> {
      setFields(false)
      e.preventDefault();
      if (
          checkFields(newUser.password,newUser.password_2, newUser.first_name,newUser.surname,newUser.email) &&
          checkPassword(newUser.password,newUser.password_2)  
      ) {
          Axios.post("http://localhost:3001/register", {
          first_name: newUser.first_name,
          surname: newUser.surname,
          email: newUser.email,
          password: newUser.password
          })
          .then((response)=>{
          console.log(response)
    })
          props.setCreateAccountStatus(false)
      } else {
          setFields(true)
      
    }
    
  }
  
  return (
    <form className='d-f-col login-field'>
        <h2>Register</h2>
        <section className='d-f-col jc-space-between'>
          <input type="text" alt="Enter first name" placeholder='First Name' onChange={(e)=> setNewUser({...newUser,first_name:e.target.value})}></input>
          <input type="Text" alt="Enter second name" placeholder='Surname' onChange={(e)=> setNewUser({...newUser,surname:e.target.value})}></input>
        </section>
        <input type="email" alt="Enter Email Address" placeholder='Email Address' onChange={(e)=> {setNewUser({...newUser,email:e.target.value})}}></input>
        <div className='short-underline'></div>
        <input type="password" alt="Enter Password" placeholder='Enter Password' onChange={(e)=> {setNewUser({...newUser,password:e.target.value})}}></input>
        <input type="password" alt="Enter Password Again" placeholder='Enter Password Again' onChange={(e)=> {setNewUser({...newUser,password_2:e.target.value})}}></input>
        
        {fields && <h3 className='form-warning'>Please check all fields are filled and passwords match.</h3>}
        <button type="submit" className = "login-btn"alt="Login Button" onClick={(e)=>registrationHandler(e)}>Register</button>
        <h3 onClick={()=> props.setCreateAccountStatus(false)}>Already have an account?</h3>
    </form>
  )
}

export default CreateUser