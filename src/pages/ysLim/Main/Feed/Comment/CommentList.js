import React, { Component } from 'react';
import CommentItem from './CommentItem/CommentItem';

export class CommentList extends Component {
  render() {
    return (
      <div className="post-comments">
        {this.props.comments.map(comment => {
          if (this.props.id === comment.feedId)
            return <CommentItem key={comment.id} comment={comment} />;
        })}
      </div>
    );
  }
}

export default CommentList;
