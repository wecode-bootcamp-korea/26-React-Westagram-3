import React, { Component } from 'react';
import './CommentInput.scss';

export class CommentInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
    };
  }
  submitComment = e => {
    const { comment } = this.state;
    const { id, addComment } = this.props;
    e.preventDefault();
    const isCommentExist = comment !== '';
    if (isCommentExist) {
      addComment(id, comment);
    } else {
      this.resetComment();
    }
  };
  resetComment = () => {
    this.setState({ comment: '' });
  };
  handleCommentInput = e => {
    this.setState({ comment: e.target.value });
  };
  render() {
    const { comment } = this.state;
    return (
      <form onSubmit={this.submitComment} className="feed-writing-comments">
        <input
          name="write-comment"
          className="write-comment"
          type="text"
          placeholder="댓글 달기..."
          value={comment}
          onChange={this.handleCommentInput}
        />
        <button className="submit-comment" type="submit">
          게시
        </button>
      </form>
    );
  }
}

export default CommentInput;
