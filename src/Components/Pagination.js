import React, { Component } from 'react'

class Pagination extends Component {
    state = {
        usersData: [],
        pageNumber: 0
    }

    componentDidMount() {
        this.handleUsersData()
    }

    componentDidUpdate(prevsProps, prevsState) {
        if(prevsState.pageNumber !== this.state.pageNumber){
            this.handleUsersData()
        }
    }

    handlebtnClick = (num) => {
        this.setState({pageNumber: num})
    }

    handleUsersData = async () => {
        const response = await fetch(`https://dummyapi.io/data/v1/user?page=${this.state.pageNumber}&limit=10`, 
        {
          method: 'GET',
          headers:{
            "app-id":'633e33e98efd49504c9c7643'
          }  
        })
        const data = await response.json()
        this.setState({usersData:data.data})
    }

    render() {
        return (
            <center>
                <h2>Pagination</h2>
                {
                    this.state.usersData && this.state.usersData.length > 0 ? (
                        <div className='row'>
                            {this.state.usersData.map((user)=> (
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
                                onClick={()=>{this.handlebtnClick(num)}}
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
        )
    }
}

export default Pagination