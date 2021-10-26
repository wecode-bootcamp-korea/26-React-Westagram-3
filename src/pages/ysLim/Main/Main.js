import React, { Component } from 'react';
import Feed from './Feed/Feed';
import './Main.scss';

class MainLim extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [],
      userComment: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/feedDataYsLim.json', {
      method: 'GET', // GET method는 기본값이라서 생략이 가능합니다.
    }) // 예시코드에서는 이해를 돕기 위해 명시적으로 기입해뒀습니다.
      .then(res => res.json())
      .then(data => {
        this.setState({
          feed: data,
        });
      });
    fetch('http://localhost:3000/data/commentDataYsLim.json', {
      method: 'GET', // GET method는 기본값이라서 생략이 가능합니다.
    }) // 예시코드에서는 이해를 돕기 위해 명시적으로 기입해뒀습니다.
      .then(res => res.json())
      .then(data => {
        this.setState({
          userComment: data,
        });
      });
  }

  addComment = (feedId, content) => {
    const newComment = {
      id: Math.floor(Math.random() * 2000),
      feedId: feedId,
      userName: 'mincraft_bangbang',
      content: content,
      isLiked: false,
    };
    this.setState({ userComment: [...this.state.userComment, newComment] });
  };

  render() {
    return (
      <main id="main-page-ysLim">
        <article>
          {this.state.feed.map(vl => (
            <Feed
              key={vl.id}
              id={vl.id}
              comments={this.state.userComment}
              addComment={this.addComment}
            />
          ))}
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
