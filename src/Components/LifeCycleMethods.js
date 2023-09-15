import React, { Component } from 'react'
import ContactUs from './ContactUs'

class LifeCycleMethods extends Component {
    constructor() {
        //do not cause Sideeffects, making api calls
        super()
        console.log('constructor Executed')
    }

    state = {
        usersData: []
    }

    static getDerivedStateFromProps(props, state) {
        //do not cause Sideeffects, making api calls
        console.log('static getDerivedStateFromProps executed')
        return null
    }

    componentDidMount() {
        console.log('componentDidMount')
        this.userData()
    }

    userData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        // console.log(data)
        this.setState({ usersData: data })
        console.log(this.state.usersData)
    }

    render() {
        { console.log('render Executed') }
        return (
            <center>
                <h2>LifeCycleMethods</h2>
                {
                    this.state.usersData && this.state.usersData.length > 0 ? (
                        <table className='table table-striped table-hover'>
                            <tr>
                                <th>id</th>
                                <th>name</th>
                                <th>email</th>
                                <th>phone</th>
                            </tr>
                            {
                                this.state.usersData.map((user) => (
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
}

export default LifeCycleMethods