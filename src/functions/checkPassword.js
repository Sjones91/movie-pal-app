import React from 'react'

export const checkLogin = (a,b)=> {
    if(a !=="" && b!==""){
        return true
    } else {
        return false
    }
}
export const checkFields = (a,b,c,d,e)=> {
    if(a,b,c,d,e !=="") {
        return true

    } else {
        return false
    }
}

export const checkPassword = (a,b)=> {
    if (a===b && a!=="") {
        return true
    } else {
        return false
    }
}
