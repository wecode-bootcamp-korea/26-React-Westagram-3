import React, { Component } from 'react';
import './Comments.scss';

class Comments extends Component {
  render() {
    const { comments } = this.props;

    return comments.map(comment => {
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

export default Comments;
