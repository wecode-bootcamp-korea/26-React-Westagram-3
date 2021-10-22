import React, { Component } from 'react';
import Comment from './Comment/Comment';

export class PostComment extends Component {
  render() {
    return this.props.comment.map(comment => <Comment comment={comment} />);
  }
}

export default PostComment;
