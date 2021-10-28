import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Comment from './Comment';
import './Feed.scss';

class Feed extends Component {
  constructor() {
    super();

    this.state = {
      commentList: [],
      newComment: '',
    };
  }

  checkInput = e => {
    const { value } = e.target;
    this.setState({ newComment: value });
  };

  addComment = e => {
    const { commentList, newComment } = this.state;
    this.setState({
      commentList: commentList.concat(newComment),
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

  componentDidMount() {
    fetch('data/yeonjeong/commentData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data =>
        this.setState({
          commentList: data,
        })
      );
  }

  render() {
    const { feedData } = this.props;
    const { newComment } = this.state;
    const { checkInput, addComment, pressEnter, handleSubmit } = this;

    return feedData.map(data => {
      return (
        <article key={data.id}>
          <div className="feedHeader">
            <div className="userInfo">
              <img alt="user profile" src={data.userImg} />
              <div className="userInfoDetail">
                <span className="userName">{data.userName}</span>
                <span className="description">{data.location}</span>
              </div>
            </div>
            <i className="fas fa-ellipsis-h" />
          </div>
          <img className="feedImg" alt="feed content" src={data.feedImg} />
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
              <b>{data.userName}</b>
              <span>
                &nbsp;{data.feedText}&nbsp;&nbsp;
                <Link to="">더 보기</Link>
              </span>
            </div>
            <ul className="feedComment">
              <Comment commentList={data.comment} />
            </ul>
            <span className="feedUploadTime">1시간 전</span>
          </div>
          <form className="feedCommentInput" onSubmit={handleSubmit}>
            <input
              id="commentInput"
              type="text"
              placeholder="댓글 달기..."
              onChange={checkInput}
              onKeyPress={pressEnter}
              value={newComment}
            />
            <button id="uploadBtn" type="button" onClick={addComment}>
              게시
            </button>
          </form>
        </article>
      );
    });
  }
}

export default Feed;
