import React, { Component } from 'react';
import Comment from '../Comment/Comment';
import '../Feed/Feed.scss';

class Feed extends Component {
  constructor() {
    super();

    this.state = {
      commentList: [],
      commentText: '',
    };
  }

  //input창 댓글 값 확인
  commentState = event => {
    this.setState({ commentText: event.target.value });
  };
  //클릭으로 댓글 추가
  commentClick = () => {
    const commentText = this.state.commentText;
    const commentText2 = this.state.commentList.concat(commentText);
    this.setState({
      commentList: commentText2,
      commentText: '',
    });
  };

  enterComment = event => {
    if (event.code === 'Enter') {
      const newCommentList = this.state.commentList.concat(
        this.state.commentText
      );
      this.setState({ commentList: newCommentList, commentText: '' });
    }
  };

  render() {
    return (
      <main className="insta-main">
        <section className="feed-top">
          <div className="feed-top__left">
            <div className="feed-profile__picture" />
            <p className="feed-profile__id">kanxion</p>
          </div>
          <img
            alt="menu"
            className="feed-image feed-top__menu"
            src="/images/jwKang//menu.png"
          />
        </section>

        <img
          alt="피드사진"
          className="my-picture"
          src="/images/jwKang/my-picture.jpg"
        />

        <section className="feed-emoji">
          <div className="feed-emoji__left">
            <img
              alt="red-heart"
              className="feed-image heart-red"
              src="/images/jwKang//heart-red.png"
            />
            <img
              alt="chat"
              className="feed-image chat"
              src="/images/jwKang//chat.png"
            />
            <img
              alt="upload"
              className="feed-image upload"
              src="/images/jwKang//upload.png"
            />
          </div>
          <img
            alt="bookmark"
            className="feed-image feed-emoji__right"
            src="/images/jwKang//save-instagram.png"
          />
        </section>

        <section className="feed-third">
          <img
            alt="travis scott"
            className="another-profile__picture scott"
            src="/images/jwKang//tavis-scott.jpg"
          />
          <p>travis scott님 외 199,200명이 좋아합니다</p>
        </section>

        <Comment commentText3={this.state.commentList} />

        <section className="commentBox">
          <input
            type="text"
            maxLength="10"
            placeholder="댓글 달기..."
            className="comment"
            onChange={this.commentState}
            onKeyPress={this.enterComment}
            value={this.state.commentText}
          />
          <button className="posting-btn" onClick={this.commentClick}>
            게시
          </button>
        </section>
      </main>
    );
  }
}

export default Feed;
