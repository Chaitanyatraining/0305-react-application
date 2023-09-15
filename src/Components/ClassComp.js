import React, { Component } from 'react'

 export class ClassComp extends Component{
    constructor(props){
        super(props)
        

    }

    render(){
        return(
            <div className='text-center'>
                <h2>Class Comp</h2>
                <h4>Welcome to {this.props.courseName}</h4>
            </div>
        )
    }
 }

