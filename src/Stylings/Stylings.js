import React from 'react'
import './Styles.css'
import primarybtn from './primarybtn.module.css'
const Stylings = () => {
    //Inline 
    //Internal 
    //External
    //Module css

    const styles ={
        btnStyle:{
            backgroundColor:'yellow',
            padding:'10px',
            fontSize:'20px'
        },
        paraStyle:{
            backgroundColor:'brown'
        }
    }

  return (
    <center>
        <h2>Stylings</h2>
        <div style={{backgroundColor:'lightGreen', padding:'10px'}}>This is Inline Stylings</div>
        <button style={styles.btnStyle}>Submit</button>
        <p style={styles.paraStyle}>this is para</p>
        <h3 className='ExtStyles'>External Styles</h3>
        <button className={primarybtn.secondarybtn}>Submit module</button>
    </center>
  )
}

export default Stylings