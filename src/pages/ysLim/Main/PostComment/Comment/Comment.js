import React, { Component } from 'react';

export class Comment extends Component {
  render() {
    return (
      <div class="post-user-comments">
        <span class="username">mincraft_bangbang&nbsp;</span>
        <span class="comment-text">{this.props.comment}</span>
        <span class="comment-icons">
          <span class="delete-comment">X</span> <i class="fas fa-heart" />
        </span>
      </div>
    );
  }
}

export default Comment;
