import React, { Component } from 'react'

class ContactUs extends Component {
    constructor() {
        super()
    }

    state = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        firstNameErr: '',
        lastNameErr: '',
        emailErr: '',
        phoneErr: ''
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.validation()
    }

    validation = () => {
        let firstNameErr = "";
        let lastNameErr = "";
        let emailErr = "";
        let phoneErr = "";

        if (this.state.firstName.length <= 4) {
            firstNameErr = "firstName should be atleast 4 characters"
        }
        if (this.state.lastName.length < 1) {
            lastNameErr = "lastname should contain atleast 1 character"
        }
        if (!this.state.email.includes('@')) {
            emailErr = "Enter a valid Email"
        }
        if (this.state.phone.length != 10) {
            phoneErr = "Enter a valid Phone Number"
        }

        // falsy value
        // nan,0,undefined,null,'',false
        if (firstNameErr || lastNameErr || emailErr || phoneErr) {
            this.setState({ firstNameErr, lastNameErr, emailErr, phoneErr })
        } else {
            this.setState({ firstNameErr, lastNameErr, emailErr, phoneErr })
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    // Validation
    // firstName more than 4 char
    // lastName should be more than 1 char
    // email should include '@'
    // phone should contain 10 digits


    render() {
        return (
            <center>
                <h2 className='mt-5'>Contact Us</h2>
                <div className='row mt-4'>
                    <div className='col-md-4'></div>
                    <div className='col-md-4'>
                        <form onSubmit={(e) => { this.handleSubmit(e) }}>
                            <div>
                                <input
                                    type="text"
                                    placeholder='Enter your First Name'
                                    className='form-control'
                                    onChange={this.handleChange}
                                    value={this.state.firstName}
                                    name="firstName"
                                />
                                <p className='text-danger'>{this.state.firstNameErr}</p>
                            </div>
                            <div className='mt-2'>
                                <input
                                    type="text"
                                    placeholder='Enter your last Name'
                                    className='form-control'
                                    onChange={this.handleChange}
                                    value={this.state.lastName}
                                    name="lastName"
                                />
                                <p className='text-danger'>{this.state.lastNameErr}</p>

                            </div>
                            <div className='mt-2'>
                                <input
                                    type="text"
                                    placeholder='Enter your Email'
                                    className='form-control'
                                    onChange={this.handleChange}
                                    value={this.state.email}
                                    name="email"
                                />
                                <p className='text-danger'>{this.state.emailErr}</p>

                            </div>
                            <div className='mt-2'>
                                <input
                                    type="number"
                                    placeholder='Enter your Phone'
                                    className='form-control'
                                    onChange={this.handleChange}
                                    value={this.state.phone}
                                    name="phone"
                                />
                                <p className='text-danger'>{this.state.phoneErr}</p>

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
}
export default ContactUs