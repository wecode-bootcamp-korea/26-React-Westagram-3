import React, { Component } from 'react';

export class CommentItem extends Component {
  render() {
    const { id, comment } = this.props.comment;
    return (
      <div class="post-user-comments">
        <span class="username">mincraft_bangbang&nbsp;</span>
        <span class="comment-text">{comment}</span>
        <span class="comment-icons">
          <span class="delete-comment">X</span> <i class="fas fa-heart" />
        </span>
      </div>
    );
  }
}

export default CommentItem;
