import React, { Component } from 'react';
import CommentItem from './CommentItem/CommentItem';

export class CommentList extends Component {
  render() {
    return this.props.comments.map(comment => {
      if (this.props.id === comment.feedId)
        return <CommentItem key={comment.id} comment={comment} />;
    });
  }
}

export default CommentList;
