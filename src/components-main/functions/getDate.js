import React from 'react'

const buildDate = ()=> {
    const currentDate = new Date()
    var year = currentDate.getFullYear();
    var month = (currentDate.getMonth()+1)
    if(month <=9) {
        month = `0${month}`
    }
    var day = currentDate.getUTCDate();
    if (day <=9) {
        day = `0${day}`
    }
    let date = `${year}-${month}-${day}` 
    return date;
}

export default buildDate;