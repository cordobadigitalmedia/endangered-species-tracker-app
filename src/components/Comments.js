import React from 'react';
import Comment from './Comment';

class Comments extends React.Component {

  render() {

    const { comments, speciesId, deleteComment } = this.props;
    const associatedComments = comments.filter(comment => comment.speciesId === speciesId);
    
    const commentList = associatedComments.map((comment, index) => {
      return <Comment key={index} comment={comment} deleteComment={deleteComment} />
    })

    return (
      <div>
        <ul>
          {commentList}
        </ul>
      </div>
    );
  }

};

export default Comments;