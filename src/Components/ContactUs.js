import React from 'react'

export const ContactUs = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('form submitted')
    }

    const handleChange = (e) =>{
        console.log(e.target.value)
    }

    return (
        <center>
            <h2>Contact Us</h2>
            <div className='row'>
                <div className='col-md-4'></div>
                <div className='col-md-4'>
                    <form onSubmit={(e)=>{handleSubmit(e)}}>
                        <div>
                            <input 
                            type="text" 
                            placeholder='Enter your Name' 
                            className='form-control' 
                            onChange={handleChange}
                            
                            />
                        </div>
                        <div className='mt-2'>
                            <input 
                            type="text" 
                            placeholder='Enter your last Name' 
                            className='form-control' 
                            onChange={handleChange}
                            />
                        </div>
                        <div className='mt-2'>
                            <input 
                            type="text" 
                            placeholder='Enter your Email' 
                            className='form-control'
                            onChange={handleChange} 
                            />
                        </div>
                        <div className='mt-2'>
                            <input 
                            type="text" 
                            placeholder='Enter your Phone' 
                            className='form-control'
                            onChange={handleChange} 
                            />
                        </div>
                        <div className='mt-2'>
                            <button className='btn btn-primary'>Submit</button>
                        </div>
                    </form>
                </div>
                <div className='col-md-4'></div>
            </div>
        </center>
    )
}
