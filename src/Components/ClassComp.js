import React, { Component } from 'react'

 class ClassComp extends Component{
    constructor(props){
        super(props)
        console.log(props)
    }
    //  {courseName, duration} = this.props

    render(){
        return(
            <div className='text-center'>
                <h2>Class Comp</h2>
                <h4>Welcome to {this.props.courseName}</h4>
            </div>
        )
    }
 }

 export default ClassComp