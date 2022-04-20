import React, { Component } from 'react'

const Clickme = () => {
// class Clickme extends React.Component {
      // setState = 0
    const state = { 
        // state = { 
        word: '', 
        count: 0
    }

    const handleChange = e => {
        // handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    const handleSubmit = e => {
        // handleSubmit = e => {
        e.preventDefault()
        // update the state
        // this.setState.count=this.increment()
        this.increment()
        this.setState({
            word: ''
        })
    } 

    const increment = () => {
        // increment = () => {
        this.setState({count: this.state.count + (this.state.word.length)})
    }

    // render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>

            <label>Type a word </label>
            <input type='text' value={this.state.word} onChange={this.handleChange} name='word'/>

            <input type='submit' value='Count the letters!'/>

            </form>
             <br></br>
             <h1><center>{this.state.count}</center></h1>
            </div>
        )
        
    }

// }
export default Clickme

// text input
        // button
        // counter starting at 0

        // type Hello -- > click --> counter 5 --> reset
        // type Goodbye -- > click --> counter 12 --> reset

        // how to create state OK
        // can't google increment button
        // use a controlled form
// make a video of this working in the browser and go over the code