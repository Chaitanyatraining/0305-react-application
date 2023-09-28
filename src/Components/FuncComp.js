import React, {useEffect, useState} from 'react'

 const FuncComp = () => {
    const [count, setCount] = useState(0)
    // always declare hooks at the top level
    // we should not call or declare hooks inside conditions, nested loops,
    //  inside nested functions 
    // useState is only for functional Component

    const handleIncrement = () => {
        setCount(count + 1)
    }
    const handleDecrement = () => {
        setCount(count - 1)
    }
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1)
    }, 1000)

    useEffect(()=>{
      return() => {
        clearInterval(intervalId)
      }
    }, [])

  return (
    <center>
        <h2>FuncComp</h2>
        <h3>Counter: {count}</h3>
        <button className='btn btn-secondary' 
        // onClick={() => {
        //   clearInterval(intervalId)}
        // }
        >stop timer</button>
        <button className='btn btn-primary me-1'
        // onClick={()=>{handleIncrement()}}
        >Increment</button>
        <button className='btn btn-danger'
        // onClick={handleDecrement}
        >Decrement</button>
    </center>
  )
}

export default FuncComp
