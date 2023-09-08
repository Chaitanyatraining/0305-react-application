import React, { Component, Fragment } from 'react'

class CounterApp extends Component {
    constructor() {
        super()
        // this.state = {
        //     counter: 0
        // }
    }
    //  to create the state inside the constructor we use this.state
    // to create outside of the constructor we use state

    state = {
        counter: 0
    }

    handleIncrement = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }
    handleDecrement = () => {
        this.setState({
            counter: this.state.counter - 1
        })
    }

    //never mutate the state directly
    //to update the state in class components we use setState

    render() {
        return (
            <>
                <h2>CounterApp</h2>
                <h3 className='mt-4'>CountValue : {this.state.counter}</h3>
                <button className='btn btn-primary me-2'
                    onClick={this.handleIncrement}
                >Increment</button>
                <button className='btn btn-danger'
                    onClick={this.handleDecrement}
                >Decrement</button>
            </>
        )
    }
}

export default CounterApp