import React from 'react'

class CommentInput extends React.Component {

  state = {
    text: ''
  }

  handleOnChange = e => {
    this.setState({
      text: e.target.value,
    })
  }

  handleOnSubmit = e => {
    e.preventDefault()
    this.props.addComment({text: this.state.text, speciesId: this.props.speciesId })
    this.setState({
      text: '',
    })
  }

  render() {
    return (
     <div>
        <form onSubmit={this.handleOnSubmit} >
          <label>Add Comment</label>
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleOnChange} />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default CommentInput