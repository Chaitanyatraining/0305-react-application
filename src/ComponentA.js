import React from 'react'
import CompB from './CompB'

 const ComponentA = (props) => {
    const {courseName, duration, data} = props  
    console.log(data)  
  return (
    <center>
        <h2>ComponentA</h2>
        <h4>Welcome to {courseName},and duration is {duration}</h4>
        <CompB data={courseName} />
    </center>
  )
}
export default ComponentA
