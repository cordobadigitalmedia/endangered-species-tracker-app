import React from 'react';

class Comment extends React.Component {


  handleOnClick = () => {
    this.props.deleteComment(this.props.comment.id)
  }

  render() {
    return (
      <div>
        <li>
          {this.props.comment.text}
        </li>
        <button onClick={this.handleOnClick}> x </button>
      </div>
    );
  }

};

export default Comment;