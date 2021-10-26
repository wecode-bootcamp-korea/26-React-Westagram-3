import React, { Component } from 'react';

export class CommentItem extends Component {
  render() {
    const { id, userName, content, isLiked } = this.props.comment;
    return (
      <div className="post-user-comments">
        <span className="username">{userName}&nbsp;</span>
        <span className="comment-text">{content}</span>
        <span className="comment-icons">
          <span className="delete-comment">X</span>{' '}
          <i
            className="fas fa-heart"
            style={{ color: isLiked ? 'red' : 'black' }}
          />
        </span>
      </div>
    );
  }
}

export default CommentItem;
