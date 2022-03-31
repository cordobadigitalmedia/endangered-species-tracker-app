import React from 'react';
import CommentInput from './CommentInput'
import Comments from './Comments'
import { connect } from 'react-redux'

class CommentsContainer extends React.Component {
  render() {
    return (
      <div>
        <CommentInput
          addComment={this.props.addComment}
          speciesId={this.props.species.id}
        />
        <Comments
          comments={this.props.comments}
          speciesId={this.props.species.id}
          deleteComment={this.props.deleteComment}
        />
      </div>
    );
  }
}

const mapStateToProps = ({comments}) => {
  return {comments}
}

const mapDispatchToProps = dispatch => ({
  addComment: comment => dispatch({type: 'ADD_COMMENT', comment}),
  deleteComment: id => dispatch({type: 'DELETE_COMMENT', id})
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer)