import React, { Component } from 'react';

export class AddComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
    };
  }
  onSubmit = e => {
    e.preventDefault();
    if (this.state.content !== '')
      this.props.addComment(this.props.id, this.state.content);
    this.setState({ content: '' });
  };
  onChange = e => {
    this.setState({ content: e.target.value });
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
          value={this.state.content}
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
