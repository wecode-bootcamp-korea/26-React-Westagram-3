import React, { Component } from 'react';
import './Comment.scss';

class Comment extends Component {
  render() {
    return this.props.commentList.map((el, index) => {
      return (
        <li key={index}>
          <b>yeonjeong</b>
          <span>&nbsp;{el}</span>
          <button className="deleteBtn">x</button>
        </li>
      );
    });
  }
}

export default Comment;
