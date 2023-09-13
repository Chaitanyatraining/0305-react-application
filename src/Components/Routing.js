import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import ContactUs from './ContactUs'
import CounterApp from './CounterApp'
import LifeCycleMethods from './LifeCycleMethods'

function Routing() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path='/contactUs' element={<ContactUs />} />
            <Route path='/counterapp' element={<CounterApp />} />
            <Route path="/lifecycle" element={<LifeCycleMethods />} />
        </Routes>
    </div>
  )
}

export default Routing