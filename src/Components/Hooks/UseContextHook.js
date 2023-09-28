import React from 'react'
import CompA from './CompA'

export const userContext = React.createContext()

const UseContextHook = () => {
  // context provides a way to pass data through the component tree without having to pass
  // props down manually at every level.

  return (
    <center>
      <h2>UseContextHook</h2>
      <userContext.Provider value={'React'}>
        <CompA />
      </userContext.Provider>
    </center>
  )
}

export default UseContextHook
