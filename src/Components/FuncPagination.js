import React, { useEffect, useState } from 'react'

function FuncPagination() {
    const [usersData, setUsersData] = useState([])
    const [pageNumber, setPageNumber] = useState(0)

    useEffect(()=>{
        handleUsersData()
    }, [pageNumber])

   const handleUsersData = async () => {
        const response = await fetch(`https://dummyapi.io/data/v1/user?page=${pageNumber}&limit=10`, 
        {
          method: 'GET',
          headers:{
            "app-id":'633e33e98efd49504c9c7643'
          }  
        })
        const data = await response.json()
        setUsersData(data.data)
    }


  return (
    <>
        <h2>FuncPagination</h2>
        <center>
                <h2>Pagination</h2>
                {
                    usersData && usersData.length > 0 ? (
                        <div className='row'>
                            {usersData.map((user)=> (
                                    <div className='col-md-6'>
                                        <div className='row border mt-3 p-3 me-2'>
                                            <div className='col-md-3'>
                                                <img src={user.picture} alt={user.firstName} className='img-fluid' />
                                            </div>
                                            <div className='col-md-9'>
                                                <h5>{user.id}</h5>
                                                <p>{user.title}{user.firstName}{user.lastName}</p>
                                            </div>
                                        </div>
                                    </div>
                            ))}
                            <div>
                            {[1,2,3,4,5,6,7,8,9].map((num) => (
                                <button className='btn btn-primary my-3 me-2'
                                onClick={()=>{setPageNumber(num)}}
                                >{num}</button>
                            ))}
                            </div>
                        </div>
                    ) :
                     <div>
                        <img src='https://i.pinimg.com/originals/c7/e1/b7/c7e1b7b5753737039e1bdbda578132b8.gif' />
                     </div>
                }
            </center>
    </>
  )
}

export default FuncPagination