import React, { Component } from 'react';
import './Comment.scss';

class Comment extends Component {
  render() {
    const { commentList } = this.props;

    return commentList.map(comment => {
      return (
        <li key={comment.id}>
          <b>{comment.userName}</b>
          <span>&nbsp;{comment.text}</span>
          <button className="deleteBtn">x</button>
        </li>
      );
    });
  }
}

export default Comment;
