import React, { useEffect, useRef } from 'react'

 const UseRefHook = () => {
    const data = useRef(null)

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(data.current.value)
    }

    useEffect(()=>{
        data.current.focus()
    }, [])
    // useState will re-render when the content chagne and update in UI.

    // useRef Hook Doesn't notify you when its content changes, 
    // Mutating the (.current) property cause a re-render
  return (
    <center>
        <h2>UseRefHook</h2>
        <form onSubmit={handleSubmit}>
            <input type='text' ref={data} placeholder='Enter your Name' />
            <br/>
            <button className='mt-2 btn btn-primary'>submit</button>
        </form>
    </center>
  )
}

export default UseRefHook
