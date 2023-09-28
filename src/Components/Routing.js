import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import ContactUs from './ContactUs'
import CounterApp from './CounterApp'
import LifeCycleMethods from './LifeCycleMethods'
import Pagination from './Pagination'
import FuncComp from './FuncComp'
import FuncUserData from './FuncUserData'
import FuncPagination from './FuncPagination'
import UseRefHook from './Hooks/UseRefHook'
import UseContextHook from './Hooks/UseContextHook'

function Routing() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path='/contactUs' element={<ContactUs />} />
            <Route path='/counterapp' element={<CounterApp />} />
            <Route path="/lifecycle" element={<LifeCycleMethods />} />
            <Route path="/pagination" element={<Pagination />} />
            <Route path="/usestatecounter" element={<FuncComp />} />
            <Route path="/funcuserdata" element={<FuncUserData />} />
            <Route path="/funcpagination" element={<FuncPagination />} />
            <Route path="/userefhook" element={<UseRefHook />} />
            <Route path="/usecontexthook" element={<UseContextHook />} />
        </Routes>
    </div>
  )
}

export default Routing