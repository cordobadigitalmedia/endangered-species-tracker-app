import React from 'react'


export default class LikesCounter extends React.Component {
    state = {
        count: 0
    }

    handleClick = e => {
        this.setState.count=this.increment()
    }

    render() {
        return (
            <div> 
            <button onClick={this.handleClick}>Like</button>
            <h3>this.state.count</h3>
            </div>
        )
    }


}