import React, { useEffect, useState } from 'react'

const FuncUserData = () => {
    const [usersData, setUsersData] = useState([])
    // useEffect is a hook that allows you to perform sideEffects from functional component
    // it serves the same purpose as componentDidMount, componentDidUpdate and componentWillUnmount

    useEffect(() => {
        userData()
    }, [])

    const userData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        setUsersData(data)
    }

    //useEffect takes two params
    // 1. A function
    // 2. An array of dependencies(optional)

    return (
        <center>
            <h2>LifeCycleMethods</h2>
            <p></p>
            {
                usersData && usersData.length > 0 ? (
                    <table className='table table-striped table-hover'>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>email</th>
                            <th>phone</th>
                        </tr>
                        {
                            usersData.map((user) => (
                                <tr>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                </tr>
                            ))
                        }
                    </table>
                ) : <p>Loading...</p>
            }
        </center>
    )
}
export default FuncUserData