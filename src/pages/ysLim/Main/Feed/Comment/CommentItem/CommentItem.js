import React, { Component } from 'react';

export class CommentItem extends Component {
  render() {
    const { id, userName, content, isLiked } = this.props.comment;
    return (
      <div class="post-user-comments">
        <span class="username">{userName}&nbsp;</span>
        <span class="comment-text">{content}</span>
        <span class="comment-icons">
          <span class="delete-comment">X</span>{' '}
          <i
            class="fas fa-heart"
            style={{ color: isLiked ? 'red' : 'black' }}
          />
        </span>
      </div>
    );
  }
}

export default CommentItem;
