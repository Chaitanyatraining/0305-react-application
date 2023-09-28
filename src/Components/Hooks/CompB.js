import React from 'react'
import CompC from './CompC'
import { userContext } from './UseContextHook'

 const CompB = () => {
  return (
    <div>
        <h2>CompB</h2>
        <userContext.Consumer>
            {value => <h3>CourseName : {value}</h3>}
        </userContext.Consumer>
        <CompC />
    </div>
  )
}

export default CompB
