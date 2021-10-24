import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Feed.scss';
import Comment from './Comment';

class Feed extends Component {
  constructor() {
    super();

    this.state = {
      commentList: [],
      newComment: '',
    };
  }

  checkInput = e => {
    this.setState({ newComment: e.target.value });
  };

  addComment = e => {
    this.setState({
      commentList: this.state.commentList.concat(this.state.newComment),
      newComment: '',
    });
  };

  pressEnter = e => {
    if (e.code === 'Enter') {
      this.addComment();
    }
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <section className="feed">
        <article>
          <div className="feedHeader">
            <div className="userInfo">
              <img
                alt="user profile"
                src="https://images.unsplash.com/photo-1634161906242-43a1d5beef68?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80"
              />
              <div className="userInfoDetail">
                <span className="userName">eliz_j_</span>
                <span className="description">WeCode - 위코드</span>
              </div>
            </div>
            <i className="fas fa-ellipsis-h" />
          </div>
          <img
            className="feedImg"
            alt="feed content"
            src="/images/yeonjeong/Main/Cat.JPG"
          />
          <div className="feedIcon">
            <i className="far fa-heart" />
            <i className="far fa-comment" />
            <i className="far fa-paper-plane" />
            <i className="far fa-bookmark" />
          </div>
          <div className="feedBody">
            <div className="numberOfLikes">
              <img
                alt="user profile"
                src="https://images.unsplash.com/photo-1634161906242-43a1d5beef68?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80"
              />
              <span>
                <b>yeonjeong</b>님 외 <b>10명</b>이 좋아합니다
              </span>
            </div>
            <div className="feedText">
              <b>eliz_j_</b>
              <span>
                &nbsp;나만 고양이 없어ㅠㅠ&nbsp;&nbsp;
                <Link to="/main-yj">더 보기</Link>
              </span>
            </div>
            <ul className="feedComment">
              <li>
                <b>yeonjeong</b>
                <span>&nbsp;나도 고양이 없어ㅠㅠ</span>
                <button className="deleteBtn">x</button>
              </li>
              <Comment commentList={this.state.commentList} />
            </ul>
            <span className="feedUploadTime">1시간 전</span>
          </div>
          <form className="feedCommentInput" onSubmit={this.handleSubmit}>
            <input
              id="commentInput"
              type="text"
              placeholder="댓글 달기..."
              onChange={this.checkInput}
              onKeyPress={this.pressEnter}
              value={this.state.newComment}
            />
            <button id="uploadBtn" type="button" onClick={this.addComment}>
              게시
            </button>
          </form>
        </article>
      </section>
    );
  }
}

export default Feed;
