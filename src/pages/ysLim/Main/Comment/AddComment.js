import React, { Component } from 'react';

export class AddComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
    };
  }
  onSubmit = e => {
    e.preventDefault();
    this.props.addComment(this.state.comment);
    this.setState({ comment: '' });
  };
  onChange = e => {
    this.setState({ comment: e.target.value });
  };
  render() {
    return (
      <form onSubmit={this.onSubmit} className="post-writing-comments">
        <input
          id="write-comment-text"
          name="write-comment"
          className="write-comment"
          type="text"
          placeholder="댓글 달기..."
          value={this.state.comment}
          onChange={this.onChange}
        />
        <input
          id="write-comment-submit"
          className="submit-comment"
          type="submit"
          value="게시"
        />
      </form>
    );
  }
}

export default AddComment;
