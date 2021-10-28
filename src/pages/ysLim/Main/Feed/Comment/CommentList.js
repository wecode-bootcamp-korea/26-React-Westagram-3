import React, { Component } from 'react';
import CommentItem from './CommentItem/CommentItem';
import './CommentList.scss';

export class CommentList extends Component {
  render() {
    const { id, comments } = this.props;
    return (
      <div className="feed-comments">
        {comments.map(comment =>
          id === comment.feedId ? (
            <CommentItem key={comment.id} comment={comment} />
          ) : (
            false
          )
        )}
      </div>
    );
  }
}

export default CommentList;
