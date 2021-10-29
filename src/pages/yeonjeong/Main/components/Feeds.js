import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Comments from './Comments';
import './Feeds.scss';

class Feeds extends Component {
  constructor() {
    super();

    this.state = {
      comments: [],
      newComment: '',
    };
  }

  commentFormInput = e => {
    const { value } = e.target;
    this.setState({ newComment: value });
  };

  addComment = e => {
    const { comments, newComment } = this.state;
    this.setState({
      comments: comments.concat(newComment),
      newComment: '',
    });
  };

  isEnter = e => {
    if (e.code === 'Enter') {
      this.addComment();
    }
  };

  handleCommentsData = () => {
    fetch('data/yeonjeong/commentsData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data =>
        this.setState({
          comments: data,
        })
      );
  };

  componentDidMount() {
    this.handleCommentsData();
  }

  render() {
    const { feedsData } = this.props;
    const { newComment } = this.state;

    return feedsData.map(feed => {
      return (
        <article key={feed.id}>
          <div className="feedHeader">
            <div className="userInfo">
              <img alt="user profile" src={feed.userImg} />
              <div className="userInfoDetail">
                <span className="userName">{feed.userName}</span>
                <span className="description">{feed.location}</span>
              </div>
            </div>
            <i className="fas fa-ellipsis-h" />
          </div>
          <img className="feedImg" alt="feed content" src={feed.feedImg} />
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
              <b>{feed.userName}</b>
              <span>
                &nbsp;{feed.feedText}&nbsp;&nbsp;
                <Link to="">더 보기</Link>
              </span>
            </div>
            <ul className="feedComment">
              <Comments comments={feed.comment} />
            </ul>
            <span className="feedUploadTime">1시간 전</span>
          </div>
          <form
            className="feedCommentInput"
            onSubmit={e => {
              e.preventDefault();
            }}
          >
            <input
              id="commentInput"
              type="text"
              placeholder="댓글 달기..."
              onChange={this.commentFormInput}
              onKeyPress={this.isEnter}
              value={newComment}
            />
            <button
              id="uploadBtn"
              type="button"
              onClick={this.addComment}
              disabled={newComment.length < 1}
            >
              게시
            </button>
          </form>
        </article>
      );
    });
  }
}

export default Feeds;
