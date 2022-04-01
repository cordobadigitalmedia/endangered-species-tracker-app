// text input
        // button
        // counter starting at 0

        // type Hello -- > click --> counter 5 --> reset
        // type Goodbye -- > click --> counter 12 --> reset

        // how to create state OK
        // can't google increment button
        // use a controlled form

import React from 'react'
// import { connect } from 'react-redux'

class Clickme extends React.Component {
      // setState = 0
    state = { 
        word: '', 
        count: 0
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        // this.props.addSpecies(this.state)
        this.setState({
            word: '',
            count: this.increment()
        })
    } 

    increment = () => {
        this.setState({count: this.state.count + (this.state.word.length)})
    }


    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>

            <label>Type a word </label>
            <input type='text' value={this.state.word} onChange={this.handleChange} name='name'/>
            <br/>

            <input type='submit' value='Count the letters!' />


            </form>
             
             {this.state.count}

            </div>
        )
        
    }

}
export default Clickme
// export default connect(Clickme);

// make a video of this working in the browser and go over the code