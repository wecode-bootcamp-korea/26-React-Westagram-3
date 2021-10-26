import React, { Component } from 'react';

export class CommentItem extends Component {
  render() {
    const { comment } = this.props;
    const { userName, content, isLiked } = comment;
    return (
      <div className="post-user-comments">
        <span className="username">{userName}&nbsp;</span>
        <span className="comment-text">{content}</span>
        <span className="comment-icons">
          <span className="delete-comment">X</span>{' '}
          <i
            className={`fas fa-heart ${
              isLiked ? 'activatedLikeYS' : 'deactivatedLikeYS'
            }`}
          />
        </span>
      </div>
    );
  }
}

export default CommentItem;
