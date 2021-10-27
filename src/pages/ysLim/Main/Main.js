import React, { Component } from 'react';
import Feed from './Feed/Feed';
import Info from './Aside/Footer/Footer';
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
    fetch('http://localhost:3000/data/ysLim/feedData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          feed: data,
        });
      });
    fetch('http://localhost:3000/data/ysLim/commentData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          userComment: data,
        });
      });
  }

  addComment = (feedId, content) => {
    const { userComment } = this.state;
    const newComment = {
      id: Math.floor(Math.random() * 2000),
      feedId: feedId,
      userName: 'mincraft_bangbang',
      content: content,
      isLiked: false,
    };
    this.setState({ userComment: [...userComment, newComment] });
  };

  render() {
    const { userComment, feed } = this.state;
    return (
      <main id="main-page-ysLim">
        <article>
          {feed.map(vl => (
            <Feed
              key={vl.id}
              id={vl.id}
              comments={userComment}
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
              alt="mincraft_bangbang profile"
            />
            <div className="my-username">
              <span className="username">mincraft_bangbang</span>
              <br />
              <span className="sub-my-username">Mincraft | 마크 자바버전</span>
            </div>
          </section>
          <section className="story">
            <div className="story-bar">
              <span className="section-name">스토리</span>
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
                  alt="Random user's profile 1"
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
                  alt="Random user's profile 2"
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
                  alt="Random user's profile 3"
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
                  <br />
                  <span className="story-time-log">4일 전</span>
                </div>
              </li>
            </ul>
          </section>
          <section className="recommend">
            <div className="recommend-bar">
              <span className="section-name">회원님을 위한 추천</span>
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
                    alt="Random user's profile 4"
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
                    alt="Random user's profile 5"
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
                    alt="Cooper Kao's Face!"
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
          <Info />
        </aside>
      </main>
    );
  }
}

export default MainLim;
