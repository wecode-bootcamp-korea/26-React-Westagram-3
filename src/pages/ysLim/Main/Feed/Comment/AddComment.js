import React, { Component } from 'react';

export class AddComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
    };
  }
  onSubmit = e => {
    const { content } = this.state;
    const { id, addComment } = this.props;
    e.preventDefault();
    if (content !== '') addComment(id, content);
    this.setState({ content: '' });
  };
  onChange = e => {
    this.setState({ content: e.target.value });
  };
  render() {
    const { content } = this.state;
    return (
      <form onSubmit={this.onSubmit} className="post-writing-comments">
        <input
          id="write-comment-text"
          name="write-comment"
          className="write-comment"
          type="text"
          placeholder="댓글 달기..."
          value={content}
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
