import React, { Component } from 'react';
import CommentList from './Comment/CommentList';
import AddComment from './Comment/AddComment';
import './Feed.scss';

export class Feed extends Component {
  render() {
    const { id, comments, addComment } = this.props;
    return (
      <div className="post post1">
        <div className="post-top">
          <div className="profile-username">
            <img
              id="profile"
              className="profile"
              src={process.env.PUBLIC_URL + '/images/ysLim/main/profile.png'}
              alt="tl's profile"
            />
            <span className="username">aescript</span>
          </div>
          <i className="fas fa-ellipsis-h" />
        </div>
        <div className="post-pic-frame">
          <img
            src={process.env.PUBLIC_URL + '/images/ysLim/main/main-pic.jpg'}
            alt="doggy with red scarf"
          />
        </div>
        <div className="post-icons">
          <i className="fas fa-heart heartActivate" />
          <i className="far fa-comment" />
          <i className="far fa-share-square" />
          <i className="far fa-bookmark" />
          <div id="profile-username" className="profile-username">
            <img
              id="profile"
              className="profile"
              src={process.env.PUBLIC_URL + '/images/ysLim/main/profile2.png'}
              alt="eyeball doggy"
            />
            <span className="username">doggypuppy</span>
            <span>님 외 2명이 좋아합니다.</span>
          </div>
        </div>

        <div className="post-description">
          <span className="username">aescript</span>
          위워크에서 진행한 베이킹 클래스...
          <span className="more-post">더보기</span>
        </div>
        <CommentList id={id} comments={comments} />

        <div className="post-date">21분 전</div>
        <AddComment id={id} addComment={addComment} />
      </div>
    );
  }
}

export default Feed;
