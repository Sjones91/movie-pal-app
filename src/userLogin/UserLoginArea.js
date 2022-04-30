import React from 'react'
import { useState } from 'react'

import LoginForm from './loginform'
import CreateUser from './CreateUser'
function UserLoginArea() {
    
    const [createAccountStatus,setCreateAccountStatus] = useState(false)
  return (
    <section className='d-f-col login'>
        {!createAccountStatus? 
        <LoginForm 
          createAccountStatus={createAccountStatus}
          setCreateAccountStatus={setCreateAccountStatus}
        />: 
        <CreateUser
          createAccountStatus={createAccountStatus}
          setCreateAccountStatus={setCreateAccountStatus}
        />}
    </section>
  )
}

export default UserLoginArea