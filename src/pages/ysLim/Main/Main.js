import React, { Component } from 'react';
import PostComment from './Comment/PostComment';
import AddComment from './Comment/AddComment';
import './Main.scss';

class MainLim extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userComment: [],
    };
  }
  addComment = comment => {
    const newComment = {
      id: Math.floor(Math.random() * 2000),
      comment: comment,
    };
    this.setState({ userComment: [...this.state.userComment, newComment] });
  };

  render() {
    return (
      <main id="main-page-ysLim">
        <article>
          <div className="post post1">
            <div className="post-top">
              <div className="profile-username">
                <img
                  id="profile"
                  className="profile"
                  src={
                    process.env.PUBLIC_URL + '/images/ysLim/main/profile.png'
                  }
                  alt="tl's profile images"
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
                  src={
                    process.env.PUBLIC_URL + '/images/ysLim/main/profile2.png'
                  }
                  alt="eyeball doggy"
                />
                <span className="username">doggypuppy</span>
                <span>님 외 2명이 좋아합니다.</span>
              </div>
            </div>

            <div className="post-description">
              <span className="username">aescript</span> 위워크에서 진행한
              베이킹 클래스...<span className="more-post">더보기</span>
            </div>
            <div id="post-comments-box#1">
              <div className="post-comments">
                <span className="username">klassethomas</span>
                <span className="comment-text"> 거봐 좋았잖아~~~~:)</span>
                <i className="heart-icon">
                  <i className="fas fa-heart" />
                </i>
                <PostComment comments={this.state.userComment} />
              </div>
            </div>

            <div className="post-date">21분 전</div>
            <AddComment addComment={this.addComment} />
          </div>
        </article>
        <aside>
          <section className="my-profile">
            <img
              id="profile"
              className="profile"
              src={process.env.PUBLIC_URL + '/images/ysLim/main/profile3.png'}
              alt="My pic"
            />
            <div className="my-username">
              <span className="username">mincraft_bangbang</span>
              <br />
              <span className="sub-my-username">Mincraft | 마크 자바버전</span>
            </div>
          </section>
          <section className="story">
            <div className="story-bar">
              <span className="section-name">스토리</span>{' '}
              <span className="see-all">모두보기</span>
            </div>
            <ul className="story-list">
              <li>
                <div className="story-img-activate" />
                <img
                  id="profile"
                  className="profile"
                  src={
                    process.env.PUBLIC_URL + '/images/ysLim/main/profile4.png'
                  }
                  alt="My pic"
                />
                <div className="my-username">
                  <span className="userID">_yum_s</span>
                  <br />
                  <span className="story-time-log">16분 전</span>
                </div>
              </li>
              <li>
                <div className="story-img-activate" />
                <img
                  id="profile"
                  className="profile"
                  src={
                    process.env.PUBLIC_URL + '/images/ysLim/main/profile8.png'
                  }
                  alt="My pic"
                />
                <div className="my-username">
                  <span className="userID">drink_n_drink_</span>
                  <br />
                  <span className="story-time-log">3시간 전</span>
                </div>
              </li>
              <li>
                <div className="story-img-activate" />
                <img
                  id="profile"
                  className="profile"
                  src={
                    process.env.PUBLIC_URL + '/images/ysLim/main/profile6.png'
                  }
                  alt="My pic"
                />
                <div className="my-username">
                  <span className="userID">butter_oiler</span>
                  <br />
                  <span className="story-time-log">20시간 전</span>
                </div>
              </li>
              <li>
                <div className="story-img-activate" />
                <img
                  id="profile"
                  className="profile"
                  src={
                    process.env.PUBLIC_URL + '/images/ysLim/main/profile7.png'
                  }
                  alt="My pic"
                />
                <div className="my-username">
                  <span className="userID">maybe-good</span>
                  <span className="story-time-log">4일 전</span>
                </div>
              </li>
            </ul>
          </section>
          <section className="recommend">
            <div className="recommend-bar">
              <span className="section-name">회원님을 위한 추천</span>{' '}
              <span className="see-all">모두보기</span>
            </div>
            <ul className="recommend-list">
              <li>
                <div className="profile-userID-username">
                  <img
                    id="profile"
                    className="profile"
                    src={
                      process.env.PUBLIC_URL + '/images/ysLim/main/profile9.jpg'
                    }
                    alt="My pic"
                  />
                  <div className="my-username">
                    <span className="userID">ioooooahwow</span>
                    <br />
                    <span className="userID-subline">
                      _rupi_na님 외2명이...
                    </span>
                  </div>
                </div>
                <span className="follow-bttn">팔로우</span>
              </li>
              <li>
                <div className="profile-userID-username">
                  <img
                    id="profile"
                    className="profile"
                    src={
                      process.env.PUBLIC_URL +
                      '/images/ysLim/main/profile10.jpg'
                    }
                    alt="My pic"
                  />
                  <div className="my-username">
                    <span className="userID">lovenpound_sun</span>
                    <br />
                    <span className="userID-subline">
                      bingo_misoya님 외 12...
                    </span>
                  </div>
                </div>
                <span className="follow-bttn">팔로우</span>
              </li>
              <li>
                <div className="profile-userID-username">
                  <img
                    id="profile"
                    className="profile"
                    src={
                      process.env.PUBLIC_URL +
                      '/images/ysLim/main/profile11.jpg'
                    }
                    alt="My pic"
                  />
                  <div className="my-username">
                    <span className="userID">cooper_kao</span>
                    <br />
                    <span className="userID-subline">
                      jimmy_tommson님 외 2...
                    </span>
                  </div>
                </div>
                <span className="follow-bttn">팔로우</span>
              </li>
            </ul>
          </section>
          <section className="info">
            Westagram 정보 · 지원 · 홍보 센터 · API · 채용 정보 ·
            개인정보처리방침 · 약관 · 디렉터리 · 프로필 · 해시태그 · 언어 © 2019
            WESTAGRAM
          </section>
        </aside>
      </main>
    );
  }
}

export default MainLim;
