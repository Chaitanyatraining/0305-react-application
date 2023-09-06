import React from 'react'

 const ConditionalRendering = () => {
    const age = 30
    // if(age>18){
    //     return <h4>you are eligible to vote</h4>
    // }else{
    //     return <h4>you are not eligible</h4>
    // }

    return(
        <div>
            {(age>=18)? <h4>you are eligible to vote</h4> :<h4>you are not eligible to vote</h4> }
        </div>
    )

//   return (
//     <div>
//         <h2>ConditionalRendering</h2>
//     </div>
//   )
}

export default ConditionalRendering