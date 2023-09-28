import React from 'react'
import { userContext } from './UseContextHook'

 const CompC = () => {
  return (
    <div>
        <h2>CompC</h2>
        <userContext.Consumer>
            {value => <h3>CourseName : {value}</h3>}
        </userContext.Consumer>
    </div>
  )
}
export default CompC
