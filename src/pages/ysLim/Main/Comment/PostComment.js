import React, { Component } from 'react';
import CommentItem from './Comment/CommentItem';

export class PostComment extends Component {
  render() {
    return this.props.comments.map(comment => (
      <CommentItem key={comment.id} comment={comment} />
    ));
  }
}

export default PostComment;
